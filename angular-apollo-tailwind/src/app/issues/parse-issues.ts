import {
  Issue,
  IssueDetails,
  Issues,
  Label,
  Milestone,
  Milestones,
  RepoIssue,
  RepoIssues,
  RepoIssuesData,
} from '../gql/models';

const parseIssues = (issueConnection: RepoIssues): Issues => {
  const pageInfo = issueConnection.pageInfo;
  const nodes = issueConnection.nodes;
  const totalCount = issueConnection.totalCount;

  const issues = nodes.reduce((issues: Issue[], issue: RepoIssue) => {
    const labelNodes = issue.labels.nodes;
    const labels = labelNodes.reduce(
      (labels: Label[], label: Label) =>
        label
          ? [
              ...labels,
              {
                color: label.color,
                name: label.name,
              },
            ]
          : labels,
      [],
    );

    return [
      ...issues,
      {
        id: issue.id,
        login: issue.author.login,
        commentCount: issue.comments.totalCount,
        labelCount: issue.labels.totalCount,
        labels,
        closed: issue.closed,
        title: issue.title,
        number: issue.number,
        createdAt: new Date(issue.createdAt),
        closedAt: issue.closedAt ? new Date(issue.closedAt) : undefined,
      },
    ];
  }, []);

  return { issues, totalCount, pageInfo };
};

function parseMilestones(milestones: Milestones) {
  const nodes = milestones.nodes;
  return nodes.reduce((milestones: Milestone[], milestone: Milestone) => {
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

export const parseQuery = (data: RepoIssuesData): IssueDetails => {
  const openIssues = parseIssues(data.repository.openIssues);
  const closedIssues = parseIssues(data.repository.closedIssues);
  const milestones = parseMilestones(data.repository.milestones);

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
    {},
  );

  return {
    openIssues,
    closedIssues,
    milestones,
    labels: Object.values(labelMap) as Label[],
  };
};
