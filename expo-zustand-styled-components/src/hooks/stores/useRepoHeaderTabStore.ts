import { create } from 'zustand';

import { REPO_TABS } from '../../utils/constants';

const initialState = {
  activeTab: REPO_TABS.code
};

const useRepoHeaderTabStore = create((set) => ({
  ...initialState,
  setActiveTab: (value) => set(() => ({ activeTab: value })),
}));

export default useRepoHeaderTabStore;