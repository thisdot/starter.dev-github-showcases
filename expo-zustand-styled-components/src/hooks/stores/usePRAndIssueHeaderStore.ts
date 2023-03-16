import { create } from 'zustand';
import { PR_ISSUE_TABS } from '../../utils/constants';

interface UsePRAndIssueHeaderStoreProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const initialState = {
  activeTab: PR_ISSUE_TABS.open,
};

const usePRAndIssueHeaderStore = create<UsePRAndIssueHeaderStoreProps>((set) => ({
  ...initialState,
  setActiveTab: (value) => set(() => ({ activeTab: value })),
}));

export default usePRAndIssueHeaderStore;
