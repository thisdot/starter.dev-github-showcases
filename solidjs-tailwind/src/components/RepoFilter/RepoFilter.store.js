import { createSignal } from 'solid-js';
import { SORT_OPTIONS } from './data';

const [search, setSearch] = createSignal('');
const [language, setLanguage] = createSignal('');
const [sortBy, setSortBy] = createSignal(SORT_OPTIONS.default);
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
