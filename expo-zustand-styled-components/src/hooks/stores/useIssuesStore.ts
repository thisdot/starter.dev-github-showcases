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
  error?: string;
  issues?: Issues;
  isLoading: boolean;
  _issues: Map<string, Issues>;
}

const _issues = new Map();

const initialState = {
  _issues,
  isLoading: false,
};

const useIssuesStore = create<IssueStore>(() => initialState);

export default useIssuesStore;
