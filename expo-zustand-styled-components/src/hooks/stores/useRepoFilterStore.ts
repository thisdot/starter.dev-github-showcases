import { create } from 'zustand';
import { defaultLanguage, FILTER_TYPE_OPTIONS, SORT_OPTIONS } from '../../components/RepoFilter/data';

export type FilterType = 'All' | 'Forks' | 'Archived'
interface UseRepoFilterStore {
  search: string;
  language: string;
  sortBy: string;
  filterType: FilterType;
  setSearch: (value: string) => void;
  setLanguage: (value: string) => void;
  setSortBy: (value: string) => void;
  setFilterType: (value: FilterType) => void;
}

const initialState = {
  search: '',
  language: defaultLanguage,
  sortBy: SORT_OPTIONS.default,
  filterType: FILTER_TYPE_OPTIONS.default as FilterType,
};

const useRepoFilterStore = create<UseRepoFilterStore>((set) => ({
  ...initialState,
  setSearch: (value) => set(() => ({search: value})),
  setLanguage: (value) => set(() => ({language: value})),
  setSortBy: (value) => set(() => ({sortBy: value})),
  setFilterType: (value) => set(() => ({filterType: value})),
}));

export default useRepoFilterStore;