import { createContext } from '@builder.io/qwik';
export interface FilterStoreProps {
  search: string;
  language: string;
  sortType: string;
  order: string;
}
const filterStore = createContext<FilterStoreProps>('filter-context');

export default filterStore;
