import { createSignal } from 'solid-js';
import { FILTER_TYPE_OPTIONS, defaultLanguage, SORT_OPTIONS } from './data';

const [search, setSearch] = createSignal('');
const [language, setLanguage] = createSignal(defaultLanguage);
const [sortBy, setSortBy] = createSignal(SORT_OPTIONS.default);
const [filterType, setFilterType] = createSignal(FILTER_TYPE_OPTIONS.default);

export {
  search,
  language,
  sortBy,
  filterType,
  setSearch,
  setLanguage,
  setSortBy,
  setFilterType,
};
