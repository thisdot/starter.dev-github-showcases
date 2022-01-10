import type { RepoPullRequestsQuery } from '@lib/github';
import type { PullRequest } from './types';
import type { Label } from '@components/RepoIssues/types';

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

  const pullRequests = nodes.reduce(
    (pullRequests: PullRequest[], pullRequest: any) => {
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
        },
      ];
    },
    []
  );

  return { pullRequests, totalCount, pageInfo };
}

export function parseQuery(data: RepoPullRequestsQuery) {
  const openPullRequests = parsePullRequests(data.repository?.openPullRequests);
  const closedPullRequests = parsePullRequests(
    data.repository?.closedPullRequests
  );

  const labelMap = [
    ...closedPullRequests.pullRequests,
    ...openPullRequests.pullRequests,
  ].reduce((acc: { [key: string]: Label }, issue: PullRequest) => {
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
    labels: Object.values(labelMap) as Label[],
  };
}
