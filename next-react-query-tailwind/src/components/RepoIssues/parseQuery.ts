import type { RepoIssuesQuery } from '@lib/github';
import type { Issue, Label, Milestone } from './types';

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
    const labels = labelNodes.reduce(
      (labels: Label[], label: any) =>
        label
          ? [
              ...labels,
              {
                color: label.color,
                name: label.name,
              },
            ]
          : labels,
      []
    );

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

function parseMilestones(milestones?: any) {
  const nodes = milestones.nodes || [];
  return nodes.reduce((milestones: Milestone[], milestone: any) => {
    if (!milestone) {
      return milestones;
    }

    return [
      ...milestones,
      {
        id: milestone.id,
        closed: milestone.closed,
        title: milestone.title,
        number: milestone.number,
        description: milestone.description,
      },
    ];
  }, []);
}

export function parseQuery(data: RepoIssuesQuery) {
  const openIssues = parseIssues(data.repository?.openIssues);
  const closedIssues = parseIssues(data.repository?.closedIssues);
  const milestones = parseMilestones(data.repository?.milestones);

  const labelMap = [...closedIssues.issues, ...openIssues.issues].reduce(
    (acc: { [key: string]: Label }, issue: Issue) => {
      const map: { [key: string]: Label } = {};
      issue.labels.forEach((label) => {
        map[label.name] = label;
      });
      return {
        ...acc,
        ...map,
      };
    },
    {}
  );

  return {
    openIssues,
    closedIssues,
    milestones,
    labels: Object.values(labelMap) as Label[],
  };
}
