import { create } from 'zustand';

import { REPO_TABS } from '../../utils/constants';
interface UseRepoHeaderTabStoreProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const initialState = {
  activeTab: REPO_TABS.code,
};

const useRepoHeaderTabStore = create<UseRepoHeaderTabStoreProps>((set) => ({
  ...initialState,
  setActiveTab: (value) => set(() => ({ activeTab: value })),
}));

export default useRepoHeaderTabStore;
