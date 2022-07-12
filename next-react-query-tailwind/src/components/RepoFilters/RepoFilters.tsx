import type { FiltersAPI, LanguageFilter } from './useRepoFilters';
import cn from 'classnames';
import { useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { RepositoryOrderField } from '@lib/github';
import FilterDropdown from './FilterDropdown';
import { TypeFilter } from './useRepoFilters';
import styles from './RepoFilters.module.css';

type RepoFiltersProps = {
  languages: LanguageFilter[];
  resultCount: number;
} & FiltersAPI;

function RepoFilters({
  state,
  changeSort,
  changeLanguage,
  changeType,
  setLanguages,
  setQuery,
  resetFilters,
  isQueryActive,
  isTypeActive,
  isLanguageActive,
  isFiltersActive,
  languages,
  resultCount,
}: RepoFiltersProps) {
  useEffect(() => {
    setLanguages(languages);
  }, [languages, setLanguages]);

  return (
    <>
      <div className={styles.container}>
        <div className="grow">
          <input
            role="search"
            type="search"
            name="search"
            id="search"
            value={state.query}
            className={styles.searchInput}
            placeholder="Find a repository.."
            onChange={(e) => setQuery(e.target.value)}
            data-testid="repository filters search input"
          />
        </div>
        <div className={styles.filters}>
          <div>
            <FilterDropdown
              name="Type"
              description="Select type"
              current={state.type}
              items={[
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
              ]}
              onChange={changeType}
            />
          </div>
          <div>
            <FilterDropdown
              name="Language"
              description="Select language"
              current={state.language}
              items={languages}
              onChange={changeLanguage}
            />
          </div>
          <div>
            <FilterDropdown
              name="Sort"
              description="Select order"
              current={state.sort}
              items={[
                {
                  value: RepositoryOrderField.UpdatedAt,
                  label: 'Last updated',
                },
                { value: RepositoryOrderField.Name, label: 'Name' },
                { value: RepositoryOrderField.Stargazers, label: 'Stars' },
              ]}
              onChange={changeSort}
            />
          </div>
        </div>
      </div>
      {isFiltersActive && (
        <div className={styles.filtersDetail}>
          <div className="text-sm">
            <span className="font-semibold" data-testid="filterText">
              {resultCount}
            </span>{' '}
            results for{' '}
            {isTypeActive && (
              <span className="font-semibold">{state.type}</span>
            )}{' '}
            repositories{' '}
            {isQueryActive && (
              <>
                matching <span className="font-semibold">{state.query}</span>
              </>
            )}{' '}
            {isLanguageActive && (
              <>
                written in{' '}
                <span className="font-semibold capitalize">
                  {state.language}
                </span>
              </>
            )}{' '}
            sorted by{' '}
            <span className="font-semibold">
              {state.sort.split('_').join(' ').toLowerCase()}
            </span>
          </div>
          <div>
            <button
              onClick={resetFilters}
              className={cn(styles.clearBtn, 'group')}
              data-testid="clear filters button"
            >
              <span
                className={cn(
                  styles.clearBtnIconContainer,
                  'group-hover:bg-blue-500'
                )}
              >
                <XIcon className={styles.clearBtnIcon} />
              </span>
              <span
                className={cn(styles.clearBtnText, 'group-hover:text-blue-500')}
              >
                Clear filter
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RepoFilters;
