import { createSignal } from 'solid-js';

const [search, setSearch] = createSignal('');
const [language, setLanguage] = createSignal('');
const [sortBy, setSortBy] = createSignal('');
const [sortType, setSortType] = createSignal('');

export {
  search,
  language,
  sortBy,
  sortType,
  setSearch,
  setLanguage,
  setSortBy,
  setSortType,
};
