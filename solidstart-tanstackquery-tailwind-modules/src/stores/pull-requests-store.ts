import { createSignal } from 'solid-js';
import { Label } from '~/types/label-type';
import { PageInfo, PullRequestNodeProps } from '~/types/pull-request-type';

export type PullRequestsStore = {
  openPullRequests: {
    pullRequests: PullRequestNodeProps[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  closedPullRequests: {
    pullRequests: PullRequestNodeProps[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  labels: Label[];
};

const [pullRequestsStore, setPullRequestsStore] =
  createSignal<PullRequestsStore>({
    openPullRequests: {
      pullRequests: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    },
    closedPullRequests: {
      pullRequests: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    },
    labels: [],
  });

export { pullRequestsStore, setPullRequestsStore };
