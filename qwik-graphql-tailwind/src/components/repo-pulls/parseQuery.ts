import { Label, ParsedPullRequestQuery, PullRequest, RepoPullRequestsQuery } from './types';

function parsePullRequests(connection?: any) {
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

  const pullRequests = nodes.reduce((pullRequests: PullRequest[], pullRequest: any) => {
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
      []
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
        state: pullRequest.state,
        url: pullRequest.url,
      },
    ];
  }, []);

  return { pullRequests, totalCount, pageInfo };
}

export function parseQuery(data: { data: RepoPullRequestsQuery }): ParsedPullRequestQuery {
  console.log(data);
  const openPullRequests = parsePullRequests(data.data.repository?.openPullRequest);
  const closedPullRequests = parsePullRequests(data.data.repository?.closedPullRequest);

  const labelMap = [...closedPullRequests.pullRequests, ...openPullRequests.pullRequests].reduce(
    (acc: { [key: string]: Label }, issue: PullRequest) => {
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
    openPullRequests,
    closedPullRequests,
    labels: Object.values(labelMap) as Label[],
  };
}
