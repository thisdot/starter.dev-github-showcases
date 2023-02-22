import { createSignal } from 'solid-js';
import {
  Issue,
  LabelProps,
  MilestoneProps,
  PageInfo,
} from '~/types/issues-type';

export type IssuesStore = {
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
