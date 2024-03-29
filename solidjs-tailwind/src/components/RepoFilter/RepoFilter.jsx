import { createEffect, createSignal, mergeProps, Show } from 'solid-js';
import { RepoBookIcon } from '../Icons';
import {
  defaultFilterType,
  defaultLanguage,
  FILTER_TYPE_OPTIONS,
  SORT_OPTIONS,
} from './data';
import FilterDropdown from '../FilterDropDown/FilterDropdown';
import FilterText from './FilterText';
import {
  language,
  setLanguage,
  filterType,
  setFilterType,
  setSortBy,
  sortBy,
  search,
} from './RepoFilter.store';
import SearchInput from './SearchInput';
import styles from './RepoFilter.module.css';

const RepoFilter = (props) => {
  const typeOptions = Object.values(FILTER_TYPE_OPTIONS);
  const sortOptions = Object.values(SORT_OPTIONS);
  const languageOptions = ['All', 'HTML', 'CSS', 'PHP'];
  const [isOnlySorted, setIsOnlySorted] = createSignal(true);

  const merged = mergeProps(
    { repoBtnText: 'New', languages: languageOptions, filteredRepoCount: 0 },
    props
  );

  const selectLanguage = (value) => setLanguage(value);
  const selectType = (value) => setFilterType(value);
  const selectSort = (value) => setSortBy(value);

  createEffect(() => {
    setIsOnlySorted(
      sortBy() &&
        !(
          language() !== defaultLanguage ||
          filterType() !== defaultFilterType ||
          search()
        )
    );
  });

  return (
    <>
      <div class={styles.repoFilterContainer}>
        <div class={styles.filterDropDownContainer}>
          <div class="flex-grow">
            <SearchInput />
          </div>
          <div class={styles.filterDropdownList}>
            <FilterDropdown
              name="Type"
              items={typeOptions}
              selected={filterType()}
              selectOption={selectType}
            />
            <FilterDropdown
              name="Language"
              selected={language()}
              items={merged.languages}
              selectOption={selectLanguage}
            />
            <FilterDropdown
              name="Sort"
              selected={sortBy()}
              items={sortOptions}
              selectOption={selectSort}
            />
          </div>
        </div>
        <div>
          <a href="https://github.com/new" class={styles.iconLink}>
            <RepoBookIcon />
            <span> {merged.repoBtnText} </span>
          </a>
        </div>
      </div>
      <Show when={!isOnlySorted()}>
        <FilterText
          filteredRepoCount={merged.filteredRepoCount}
          setFilterType={setFilterType}
          setLanguage={setLanguage}
        />
      </Show>
    </>
  );
};

export default RepoFilter;
