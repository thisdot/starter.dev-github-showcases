import type {
  PullRequestAPIResponse,
  PullRequestItemAPIResponse,
  RepoPullRequest,
  RepoPullRequests,
} from '$lib/interfaces';

export const remapRepoPullRequest = (
  item?: PullRequestItemAPIResponse
): RepoPullRequest | undefined => {
  return item
    ? {
        id: item.id,
        login: item.user?.login,
        title: item.title,
        number: item.number,
        state: item.state,
        closedAt: item.closed_at ? new Date(item.closed_at) : null,
        mergedAt: item.pull_request?.merged_at ? new Date(item.pull_request.merged_at) : null,
        createdAt: new Date(item.created_at),
        labels: item.labels,
        commentCount: item.comments,
        labelCount: item.labels?.length || 0,
      }
    : undefined;
};

export const remapRepoPullRequestCollection = (data: PullRequestAPIResponse): RepoPullRequests => {
  return {
    totalCount: data.total_count,
    pullRequests: data.items.map(remapRepoPullRequest).filter(Boolean) as RepoPullRequest[],
  };
};
