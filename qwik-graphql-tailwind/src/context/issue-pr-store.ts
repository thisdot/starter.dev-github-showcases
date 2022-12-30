import { createContext } from '@builder.io/qwik';

export type Tabs = 'open' | 'closed';

export interface Issue {
  url: string;
  closedAt: string;
  comments: {
    totalCount: number;
  };
  createdAt: string;
  number: number;
  state: string;
  title: string;
  author: {
    login: string;
  };
}

export interface IssuesPRContextProps {
  activeTab: Tabs;
  closedIssues: Issue[];
  openIssues: Issue[];
  closedIssuesCount: number;
  openIssuesCount: number;
  loading: boolean;
  milestones: { value: string; label: string }[];
  issuesLabel: { value: string; label: string }[];
  openPageInfo: {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
  };
  closedPageInfo: {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
  };
}
const IssuesPRContext = createContext<IssuesPRContextProps>('Issues-context');

export default IssuesPRContext;
