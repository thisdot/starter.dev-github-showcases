import { create } from 'zustand';
import { PageInfo } from '../../types/user-repos-type';
import { Issue, MilestoneProps } from '../../types/issues-type';
import { Label } from '../../types/label-type';
interface Issues {
  openIssues: {
    issues: Issue[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  closedIssues: {
    issues: Issue[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  milestones: MilestoneProps[];
  labels: Label[];
}

interface IssueStore {
  isLoading: boolean;
  error?: string;
  before?: string | null;
  after?: string | null;
  issues: Issues;
  setLoading: (value: boolean) => void;
  setIssues: (value: Issues) => void;
  setBefore: (value: string) => void;
  setAfter: (value: string) => void;
  setErrorMsg: (value: string) => void;
  resetBeforeAndAfter: () => void;
}

const initialState = {
  isLoading: true,
  before: null,
  after: null,
  issues: {
    openIssues: {
      issues: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    closedIssues: {
      issues: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    milestones: [],
    labels: [],
  },
};

const useIssuesStore = create<IssueStore>((set) => ({
  ...initialState,
  setLoading: (value) => set(() => ({ isLoading: value })),
  setIssues: (value) => set(() => ({ issues: value })),
  setBefore: (value) => set(() => ({ before: value })),
  setAfter: (value) => set(() => ({ after: value })),
  resetBeforeAndAfter: () => set(() => ({ after: null, before: null })),
  setErrorMsg: (value) => set(() => ({ error: value })),
}));

export default useIssuesStore;
