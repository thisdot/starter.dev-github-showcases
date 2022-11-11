import type { PullRequestItemAPIResponse, RepoPullRequest } from '$lib/interfaces';

export const remapRepoPullRequest = (item: PullRequestItemAPIResponse): RepoPullRequest => {
  return {
    id: item.id,
    login: item.user.login,
    title: item.title,
    number: item.number,
    state: item.state,
    closedAt: item.closed_at ? new Date(item.closed_at) : null,
    mergedAt: item.pull_request.merged_at ? new Date(item.pull_request.merged_at) : null,
    createdAt: new Date(item.created_at),
    labels: item.labels,
    commentCount: item.comments,
    labelCount: item.labels.length,
  };
};
