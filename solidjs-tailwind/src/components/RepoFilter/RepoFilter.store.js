import { createSignal } from 'solid-js';
import { defaultLanguage } from './data';

const [search, setSearch] = createSignal('');
const [language, setLanguage] = createSignal(defaultLanguage);
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
