import { Setter, Show, splitProps } from 'solid-js';
import { CloseIcon } from '../Icons';
import { defaultFilterType, defaultLanguage } from './data';
import { filterType, language, search, sortBy } from './RepoFilter.store';
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
  setFilterType: Setter<string>;
  setLanguage: Setter<string>;
};

const FilterText = (props: FilterTextProps) => {
  const [local] = splitProps(props, [
    'filteredRepoCount',
    'setFilterType',
    'setLanguage',
  ]);

  const clearFilters = () => 'clear';

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
      <div onClick={() => clearFilters()}>
        <a class={styles.clearFilter}>
          <span class={styles.closeIconSpan}>
            <CloseIcon />
          </span>
          Clear filter
        </a>
      </div>
    </div>
  );
};

export default FilterText;
