import { Label } from '~/context/pull-request-store';
import { Issue, IssuesQuery, ParsedIssueQuery } from './type';
import { parseMilestones } from '~/utils/helpers';

function parseIssues(connection?: any) {
  if (!connection) {
    return {
      issues: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = connection.pageInfo;
  const nodes = connection?.nodes || [];
  const totalCount = connection.totalCount;

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
        merged: issue.merged,
        title: issue.title,
        number: issue.number,
        createdAt: issue.createdAt,
        closedAt: issue.closedAt,
        mergedAt: issue.mergedAt,
        state: issue.state,
        url: issue.url,
      },
    ];
  }, []);

  return { issues, totalCount, pageInfo };
}

export function parseQuery(data: { data: IssuesQuery }): ParsedIssueQuery {
  const openIssues = parseIssues(data.data.repository?.openIssues);
  const closedIssues = parseIssues(data.data.repository?.closedIssues);
  const milestones = parseMilestones(data.data.repository?.milestones);
  const labels = data.data.repository?.labels;

  const labelMap = (labels?.nodes || []).map((label: Label) => ({ color: label.color, name: label.name }));

  return {
    openIssues,
    closedIssues,
    milestones,
    labels: labelMap,
  };
}
