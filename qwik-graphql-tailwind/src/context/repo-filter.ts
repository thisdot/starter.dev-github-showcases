import { createContext } from '@builder.io/qwik';
export interface FilterStoreProps {
  search: string;
  language: string;
  type: string;
  sortBy: string;
}
const filterStore = createContext<FilterStoreProps>('filter-context');

export default filterStore;
