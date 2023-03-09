import { create } from 'zustand';
import { defaultLanguage, FILTER_TYPE_OPTIONS, SORT_OPTIONS } from '../../components/RepoFilter/data';
interface UseRepoFilterStore {
  search: string;
  language: string;
  sortBy: string;
  filterType: string;
  setSearch: (value: string) => void;
  setLanguage: (value: string) => void;
  setSortBy: (value: string) => void;
  setFilterType: (value: string) => void;
}

const initialState = {
  search: '',
  language: defaultLanguage,
  sortBy: SORT_OPTIONS.default,
  filterType: FILTER_TYPE_OPTIONS.default,
};

const useRepoFilterStore = create<UseRepoFilterStore>((set) => ({
  ...initialState,
  setSearch: (value) => set(() => ({search: value})),
  setLanguage: (value) => set(() => ({language: value})),
  setSortBy: (value) => set(() => ({sortBy: value})),
  setFilterType: (value) => set(() => ({filterType: value})),
}));

export default useRepoFilterStore;