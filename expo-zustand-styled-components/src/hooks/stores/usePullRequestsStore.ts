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
  isLoading: boolean;
  error?: string;
  before?: string | null;
  after?: string | null;
  pullRequests: PullRequests;
  setLoading: (value: boolean) => void;
  setPullRequests: (value: PullRequests) => void;
  setBefore: (value: string) => void;
  setAfter: (value: string) => void;
  setErrorMsg: (value: string) => void;
  resetBeforeAndAfter: () => void;
}

const initialState = {
  isLoading: true,
  before: undefined,
  after: undefined,
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
};

const usePullRequestsStore = create<PullRequeststore>((set) => ({
  ...initialState,
  setLoading: (value) => set(() => ({ isLoading: value })),
  setPullRequests: (value) => set(() => ({ pullRequests: value })),
  setBefore: (value) => set(() => ({ before: value })),
  setAfter: (value) => set(() => ({ after: value })),
  resetBeforeAndAfter: () => set(() => ({ after: null, before: null })),
  setErrorMsg: (value) => set(() => ({ error: value })),
}));

export default usePullRequestsStore;
