import { createContext } from '@builder.io/qwik';
export interface FilterStoreProps {
  search: string;
  language: string;
  filterType: string;
  sortBy: string;
}
const filterStore = createContext<FilterStoreProps>('filter-context');

export default filterStore;
