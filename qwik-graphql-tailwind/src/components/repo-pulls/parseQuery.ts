import { parseMilestones } from '~/utils/helpers';
import { ParsedPullRequest, ParsedPullRequestQuery, PullRequestProps, RepoPullRequestsQuery } from './types';
import { Label } from '~/types';

function parsePullRequests(connection?: PullRequestProps): ParsedPullRequest {
  if (!connection) {
    return {
      pullRequests: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = connection.pageInfo;
  const nodes = connection?.nodes || [];
  const totalCount = connection.totalCount;

  const pullRequests = nodes.map((pullRequest) => {
    const labelNodes = pullRequest.labels?.nodes || [];
    const labels = labelNodes.map((label: Label) => ({
      color: label.color,
      name: label.name,
    }));

    return {
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
    };
  });

  return { pullRequests, totalCount, pageInfo };
}

export function parseQuery(data: { data: RepoPullRequestsQuery }): ParsedPullRequestQuery {
  const openPullRequests = parsePullRequests(data.data.repository?.openPullRequest);
  const closedPullRequests = parsePullRequests(data.data.repository?.closedPullRequest);
  const milestones = parseMilestones(data.data.repository?.milestones);
  const labels = data.data.repository?.labels;
  const labelMap = (labels.nodes || []).map((label: Label) => ({ color: label.color, name: label.name }));

  return {
    openPullRequests,
    closedPullRequests,
    labels: labelMap,
    milestones,
  };
}
