import { create } from 'zustand';
import { PR_ISSUE_TABS, SORT_OPTIONS } from '../../utils/constants';

interface UsePRAndIssueHeaderStoreProps {
  activeTab: string;
  label?: string;
  sortBy: string;
  milestone?: string;
  milestones: { title: string }[];
  labels: { name: string; color?: string }[];
  setActiveTab: (value: string) => void;
  setSortBy: (value: string) => void;
  setLabel: (value: string) => void;
  setMilestone: (value: string) => void;
  setMilestones: (value: { title: string }[]) => void;
  setLabels: (value: { name: string }[]) => void;
  clearFilter: () => void;
}
const initialState = {
  activeTab: PR_ISSUE_TABS.open,
  sortBy: Object.values(SORT_OPTIONS)[0],
  milestones: [],
  labels: [],
};

const usePRAndIssueHeaderStore = create<UsePRAndIssueHeaderStoreProps>((set) => ({
  ...initialState,
  setActiveTab: (value) => set(() => ({ activeTab: value })),
  setSortBy: (value) => set(() => ({ sortBy: value })),
  setLabel: (value) => set(() => ({ label: value })),
  setMilestone: (value) => set(() => ({ milestone: value })),
  setMilestones: (value) => set(() => ({ milestones: value })),
  setLabels: (value) => set(() => ({ labels: value })),
  clearFilter: () =>
    set(() => ({
      sortBy: Object.values(SORT_OPTIONS)[0],
      label: undefined,
      milestone: undefined,
    })),
}));

export default usePRAndIssueHeaderStore;
