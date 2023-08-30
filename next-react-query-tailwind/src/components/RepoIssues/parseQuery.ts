import type { RepoIssuesQuery } from '@lib/github';
import type { Issue, Label } from './types';
import { parseMilestones } from '@lib/parseFunction';

// sorry, couldn't get a type for issueConnection that made ts happy :(
function parseIssues(issueConnection?: any) {
  if (!issueConnection) {
    return {
      issues: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = issueConnection.pageInfo;
  const nodes = issueConnection.nodes || [];
  const totalCount = issueConnection.totalCount;

  const issues = nodes.reduce((issues: Issue[], issue: any) => {
    if (!issue) {
      return issues;
    }

    const labelNodes = issue.labels?.nodes || [];
    const labels = labelNodes.map((label: Label) => ({
      color: label.color,
      name: label.name,
    }));

    return [
      ...issues,
      {
        id: issue.id,
        login: issue.author?.login,
        commentCount: issue.comments.totalCount,
        labelCount: issue.labels.totalCount,
        labels,
        closed: issue.closed,
        title: issue.title,
        number: issue.number,
        createdAt: issue.createdAt,
        closedAt: issue.closedAt,
      },
    ];
  }, []);

  return { issues, totalCount, pageInfo };
}

export function parseQuery(data: RepoIssuesQuery) {
  const openIssues = parseIssues(data.repository?.openIssues);
  const closedIssues = parseIssues(data.repository?.closedIssues);
  const milestones = parseMilestones(data.repository?.milestones);

  const labelMap = (data.repository?.labels?.nodes || []).map((label) => ({
    name: label?.name,
    color: label?.color,
  }));

  return {
    openIssues,
    closedIssues,
    milestones,
    labels: labelMap,
  };
}
