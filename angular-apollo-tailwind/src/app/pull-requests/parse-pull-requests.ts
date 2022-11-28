import {
  Label,
  Milestone,
  RepoPullRequest,
  RepoPullRequestDetails,
  RepoPullRequestsQuery,
} from '../gql';

export const parsePullRequests = (connection: any) => {
  if (!connection) {
    return {
      pullRequests: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = connection.pageInfo;
  const nodes = connection.nodes || [];
  const totalCount = connection.totalCount;

  const pullRequests: RepoPullRequest[] = nodes.reduce(
    (pullRequests: RepoPullRequest[], pullRequest: any) => {
      if (!pullRequest) {
        return pullRequests;
      }

      const labelNodes = pullRequest.labels?.nodes || [];
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
        [],
      );

      return [
        ...pullRequests,
        {
          id: pullRequest.id,
          login: pullRequest.author?.login,
          commentCount: pullRequest.comments.totalCount,
          labelCount: pullRequest.labels.totalCount,
          labels,
          closed: pullRequest.closed,
          merged: pullRequest.merged,
          title: pullRequest.title,
          number: pullRequest.number,
          createdAt: pullRequest.createdAt,
          closedAt: pullRequest.closedAt,
          mergedAt: pullRequest.mergedAt,
        },
      ];
    },
    [],
  );

  return { pullRequests, totalCount, pageInfo };
};

const parseMilestones = (milestones: any) => {
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
};

export const parsePullRequestsQuery = (
  data: RepoPullRequestsQuery,
): RepoPullRequestDetails => {
  const openPullRequests = parsePullRequests(data.repository?.openPullRequests);
  const closedPullRequests = parsePullRequests(
    data.repository?.closedPullRequests,
  );
  const milestones = parseMilestones(data.repository?.milestones);

  const labelMap = [
    ...closedPullRequests.pullRequests,
    ...openPullRequests.pullRequests,
  ].reduce((acc: { [key: string]: Label }, issue: RepoPullRequest) => {
    const map: { [key: string]: Label } = {};

    issue.labels.forEach((label) => {
      map[label.name] = label;
    });
    return {
      ...acc,
      ...map,
    };
  }, {});

  return {
    openPullRequests,
    closedPullRequests,
    milestones,
    labels: Object.values(labelMap) as Label[],
  };
};
