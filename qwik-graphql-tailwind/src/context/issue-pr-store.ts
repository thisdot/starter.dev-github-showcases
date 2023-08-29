import { createContext } from '@builder.io/qwik';
import { Milestone } from '~/components/issue-tab-view/type';
import { Label } from '~/types';

export type Tabs = 'open' | 'closed';

export interface Issue {
  url: string;
  closedAt: string;
  commentCount: number;
  createdAt: string;
  number: number;
  state: string;
  title: string;
  login: string;
  labels: Label[];
}

export interface IssuesPRContextProps {
  activeTab: Tabs;
  closedIssues: Issue[];
  openIssues: Issue[];
  closedIssuesCount: number;
  openIssuesCount: number;
  loading: boolean;
  milestones: Milestone[];
  issuesLabel: Label[];
  openPageInfo: {
    endCursor?: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
  };
  closedPageInfo: {
    endCursor?: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
  };
}
const IssuesPRContext = createContext<IssuesPRContextProps>('Issues-context');

export default IssuesPRContext;
