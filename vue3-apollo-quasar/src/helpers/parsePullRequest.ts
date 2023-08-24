import {
  PageInfo,
  PullRequest,
  PullRequestProps,
} from '@/composables/github/types';

export interface IPullRequestsParse {
  pullRequests: PullRequest[];
  totalCount: number;
  pageInfo: PageInfo;
}

export function parsePullRequests(data: PullRequestProps): IPullRequestsParse {
  if (!data) {
    return {
      pullRequests: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = data.pageInfo;
  const nodes = data.nodes || [];
  const totalCount = data.totalCount;
  const pullRequests = nodes.map((pullRequest) => {
    const labels = (pullRequest.labels?.nodes || []).map((label) => ({
      color: label.color,
      name: label.name,
    }));
    return {
      id: pullRequest.id,
      login: pullRequest.author?.login,
      commentCount: pullRequest.comments.totalCount,
      labelCount: pullRequest.labels.totalCount,
      labels,
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
