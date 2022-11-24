import { createSignal } from 'solid-js';
import { FILTER_TYPE_OPTIONS } from './data';

const [search, setSearch] = createSignal('');
const [language, setLanguage] = createSignal('');
const [sortBy, setSortBy] = createSignal('');
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
