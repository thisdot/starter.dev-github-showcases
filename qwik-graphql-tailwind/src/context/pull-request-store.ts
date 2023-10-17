import { createContext } from '@builder.io/qwik';
import { Milestone } from '~/components/issue-tab-view/type';
import { PullRequest } from '~/components/repo-pulls/types';

export type Tabs = 'open' | 'closed';

export interface Label {
  color: string;
  name: string;
  description?: string;
}

export interface PullRequestContextProps {
  activeTab: Tabs;
  closedPullRequest: PullRequest[];
  openPullRequest: PullRequest[];
  closedPullRequestCount: number;
  openPullRequestCount: number;
  pullRequestLabels: Label[];
  pullRequestMilestones: Milestone[];
  openPageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  closedPageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  loading: boolean;
}

const PullRequestContext = createContext<PullRequestContextProps>('pull-request-context');

export default PullRequestContext;
