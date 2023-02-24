import { createSignal } from 'solid-js';
import {
  IssueNodeProps,
  LabelProps,
  MilestoneProps,
  PageInfo,
} from '~/types/issues-type';

export type IssuesStore = {
  openIssues: {
    issues: IssueNodeProps[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  closedIssues: {
    issues: IssueNodeProps[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  milestones: MilestoneProps[];
  labels: LabelProps[];
};

const [issuesStore, setIssuesStore] = createSignal<IssuesStore>({
  openIssues: {
    issues: [],
    totalCount: 0,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  closedIssues: {
    issues: [],
    totalCount: 0,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  milestones: [],
  labels: [],
});

export { issuesStore, setIssuesStore };
