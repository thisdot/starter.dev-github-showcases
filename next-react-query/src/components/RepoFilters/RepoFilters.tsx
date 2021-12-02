import type { FiltersAPI, LanguageFilter } from './useRepoFilters';
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
        <div className="flex-grow">
          <input
            role="search"
            type="search"
            name="search"
            id="search"
            value={state.query}
            className={styles.searchInput}
            placeholder="Find a repository.."
            onChange={(e) => setQuery(e.target.value)}
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
        <div className="py-4 border-t flex items-center justify-between">
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
              className="inline-flex items-center justify-center group"
            >
              <span className="p-0.5 rounded bg-gray-500 inline-flex items-center justify-center mr-2 group-hover:bg-blue-500">
                <XIcon className="w-3.5 h-3.5 text-white" />
              </span>
              <span className="text-sm text-gray-500 group-hover:text-blue-500">
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
