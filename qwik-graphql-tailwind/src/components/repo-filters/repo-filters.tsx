import { $, component$, useContext } from '@builder.io/qwik';
import * as styles from './repo-filters.classNames';
import cn from 'classnames';
import { LanguageFilter, TypeFilter, RepositoryOrderField, DefaultLanguage } from './types';
import { FilterDropdown } from '../filter-dropdown/filter-dropdown';
import { XmarkIcon, CheckIcon } from '../icons';
import { SearchInput } from '../search-input/search-input';
import filterStore from '../../context/repo-filter';

export type RepoFiltersProps = {
  languages: LanguageFilter[];
  resultCount: number;
};

export const RepoFilters = component$(({ languages, resultCount }: RepoFiltersProps) => {
  const filters = useContext(filterStore);
  const resetFilters$ = $(() => {
    filters.search = '';
    filters.language = DefaultLanguage.default;
    (filters.type = TypeFilter.ALL), (filters.sortBy = RepositoryOrderField.UpdatedAt);
  });
  const isLanguageActive = filters.language !== TypeFilter.ALL;
  const isQueryActive = !!filters.search;
  const isTypeActive = filters.type !== TypeFilter.ALL;
  const isFiltersActive = isLanguageActive || isQueryActive || isTypeActive;

  const sortOptions = [
    {
      value: RepositoryOrderField.UpdatedAt,
      label: 'Last updated',
    },
    { value: RepositoryOrderField.Name, label: 'Name' },
    { value: RepositoryOrderField.Stargazers, label: 'Stars' },
  ];

  const filteOptions = [
    {
      label: 'All',
      value: TypeFilter.ALL,
    },
    {
      label: 'Forks',
      value: TypeFilter.FORKS,
    },
    {
      label: 'Archived',
      value: TypeFilter.ARCHIVED,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className="grow">
          <SearchInput className={styles.searchInput} placeholder="Search repositories..." />
        </div>
        <div className={styles.filters}>
          <div>
            <FilterDropdown name="Type" description="Select type">
              {filteOptions.map(({ label, value }) => (
                <div>
                  <button
                    onClick$={() => (filters.type = value)}
                    type="button"
                    name={'Type'}
                    className={styles.itemButton}
                  >
                    {value === filters.type && <CheckIcon className={styles.itemActiveIcon} />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
          <div>
            <FilterDropdown name="Language" description="Select language">
              {languages.map(({ label, value }) => (
                <div>
                  <button
                    onClick$={() => (filters.language = value)}
                    type="button"
                    name={'language'}
                    className={styles.itemButton}
                  >
                    {value === filters.language && <CheckIcon className={styles.itemActiveIcon} />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
          <div>
            <FilterDropdown name="Sort" description="Select order">
              {sortOptions.map(({ label, value }) => (
                <div>
                  <button
                    onClick$={() => (filters.sortBy = value)}
                    type="button"
                    name={'order'}
                    className={styles.itemButton}
                  >
                    {value === filters.sortBy && <CheckIcon className={styles.itemActiveIcon} />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
        </div>
      </div>
      {isFiltersActive && (
        <div className={styles.filtersDetail}>
          <div className="text-sm">
            <span className="font-semibold" data-testid="filterText">
              {resultCount}
            </span>{' '}
            results for {isTypeActive && <span className="font-semibold">{filters.type}</span>} repositories{' '}
            {isQueryActive && (
              <>
                matching <span className="font-semibold">{filters.search}</span>
              </>
            )}{' '}
            {isLanguageActive && (
              <>
                written in <span className="font-semibold capitalize">{filters.language}</span>
              </>
            )}{' '}
            sorted by <span className="font-semibold">{filters.sortBy.split('_').join(' ').toLowerCase()}.</span>
          </div>
          <div>
            <button onClick$={resetFilters$} className={cn(styles.clearBtn, 'group')}>
              <span className={cn(styles.clearBtnIconContainer, 'group-hover:bg-blue-500')}>
                <XmarkIcon className={styles.clearBtnIcon} />
              </span>
              <span className={cn(styles.clearBtnText, 'group-hover:text-blue-500')}>Clear filter</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
});
