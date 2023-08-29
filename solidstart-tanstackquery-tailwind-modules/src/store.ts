import { createSignal } from 'solid-js';
import { PullRequestsSignal } from './routes/[owner]/[name]/pulls';
import { IssuesSignal } from './routes/[owner]/[name]/issues';

const [activeTab, setActiveTab] = createSignal<'OPEN' | 'CLOSED'>('OPEN');
const [sortBy, setSortBy] = createSignal('Newest');
const [selectedLabel, setSelectedLabel] = createSignal<string>();
const [selectedMilestone, setSelectedMilestone] = createSignal<string>();
const [milestoneId, setMilestoneId] = createSignal<string>();
const [milestoneNumber, setMilestoneNumber] = createSignal<string>();

const [pullRequests, setPullRequests] = createSignal<PullRequestsSignal>({
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
  milestones: [],
  labels: [],
});

const [issues, setIssues] = createSignal<IssuesSignal>({
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

export {
  activeTab,
  setActiveTab,
  sortBy,
  setSortBy,
  selectedLabel,
  setSelectedLabel,
  selectedMilestone,
  setSelectedMilestone,
  milestoneId,
  setMilestoneId,
  pullRequests,
  setPullRequests,
  issues,
  setIssues,
  milestoneNumber,
  setMilestoneNumber,
};
