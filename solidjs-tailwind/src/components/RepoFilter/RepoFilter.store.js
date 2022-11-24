import { createSignal } from 'solid-js';

const [search, setSearch] = createSignal('');
const [language, setLanguage] = createSignal('');
const [sortBy, setSortBy] = createSignal('');
const [filterType, setFilterType] = createSignal('');

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
