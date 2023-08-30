import type { PullRequest } from './types';
import type { Label } from '@components/RepoIssues/types';
import { RepoPullRequestsQuery } from '@lib/github';
import { parseLabels, parseMilestones } from '@lib/parseFunction';

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
      const labels = labelNodes.map((label: Label) => ({
        color: label.color,
        name: label.name,
      }));

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
  console.log(data);

  const milestones = parseMilestones(data.repository?.milestones);

  const labelMap = parseLabels(data.repository?.labels);

  return {
    openPullRequests,
    closedPullRequests,
    labels: labelMap,
    milestones,
  };
}
