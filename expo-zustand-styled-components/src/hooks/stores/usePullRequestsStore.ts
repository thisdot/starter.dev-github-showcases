import { create } from 'zustand';
import { PageInfo } from '../../types/user-repos-type';
import { PullRequest } from '../../types/pull-requests-type';
import { Label } from '../../types/label-type';

interface PullRequests {
  openPullRequests: {
    pullRequests: PullRequest[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  closedPullRequests: {
    pullRequests: PullRequest[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  labels: Label[];
}

interface PullRequeststore {
  error?: string;
  isLoading: boolean;
  pullRequests: PullRequests;
  _pullRequests: Map<string, PullRequests>;
}

const _pullRequests = new Map();

const initialState = {
  isLoading: true,
  pullRequests: {
    openPullRequests: {
      pullRequests: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    closedPullRequests: {
      pullRequests: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    labels: [],
  },
  _pullRequests,
};

const usePullRequestsStore = create<PullRequeststore>(() => initialState);

export default usePullRequestsStore;
