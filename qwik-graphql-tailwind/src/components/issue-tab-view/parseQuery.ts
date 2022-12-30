import { Issue, Milestone } from './type';
import { Label } from '../repo-pulls/types';

function parseIssues(connection?: any) {
  if (!connection) {
    return {
      issues: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = connection.pageInfo;
  const nodes = connection.nodes || [];
  const totalCount = connection.totalCount;

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

export function parseQuery(data: { data: any }): any {
  const openIssues = parseIssues(data.data.repository?.openIssues);
  const closedIssues = parseIssues(data.data.repository?.closedIssues);
  const milestones = parseMilestones(data.data.repository?.milestones);

  const labelMap = [...closedIssues.issues, ...openIssues.issues].reduce(
    (acc: { [key: string]: Label }, issue: any) => {
      const map: { [key: string]: Label } = {};
      issue.labels.forEach((label: Label) => {
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
