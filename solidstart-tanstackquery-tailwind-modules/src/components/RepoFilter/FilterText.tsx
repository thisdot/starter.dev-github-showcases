import { Show, splitProps } from 'solid-js';
import { CloseIcon } from '../Icons';
import { defaultFilterType, defaultLanguage } from './data';
import {
  filterType,
  language,
  resetFilter,
  search,
  sortBy,
} from './RepoFilter.store';
import styles from './RepoFilter.module.css';

const modifyFilterTypeText = (filterText = 'test') => {
  if (filterText.endsWith('s')) {
    if (filterText.match(new RegExp('forks', 'i'))) {
      filterText = filterText.replace('s', 'ed');
    } else {
      filterText = filterText.replace('s', '');
    }
  }
  return filterText;
};

type FilterTextProps = {
  filteredRepoCount?: number;
};

const FilterText = (props: FilterTextProps) => {
  const [local] = splitProps(props, ['filteredRepoCount']);

  return (
    <div class={styles.filterTextContainer}>
      <div class="flex-grow">
        <small class={styles.filterText}>
          <strong>{local.filteredRepoCount}</strong>
          results for
          <Show when={filterType() && filterType() !== defaultFilterType}>
            <strong>{modifyFilterTypeText(filterType())}</strong>
          </Show>{' '}
          repositories
          <Show when={search()}>
            <span>
              matching <strong> {search()} </strong>
            </span>
          </Show>
          <Show when={language() && language() !== defaultLanguage}>
            <span>
              written in
              <strong> {language()} </strong>
            </span>
          </Show>
          <span>
            sorted by
            <strong>{' ' + sortBy()}</strong>
          </span>
        </small>
      </div>
      <div onClick={resetFilter}>
        <a
          class={
            'flex items-center group hover:text-blue-600 transition-colors delay-[60ms] no-underline gap-2 text-sm cursor-pointer'
          }
        >
          <span
            class={
              'text-white rounded-md bg-gray-500 group-hover:bg-blue-600 transition-colors delay-[60ms] w-4 h-4'
            }
          >
            <CloseIcon />
          </span>
          Clear filter
        </a>
      </div>
    </div>
  );
};

export default FilterText;
