import type { FiltersAPI, LanguageFilter } from './useRepoFilters';
import { useEffect } from 'react';
import { RepositoryOrderField } from '@lib/github';
import FilterDropdown from './FilterDropdown';
import { TypeFilter } from './useRepoFilters';
import styles from './RepoFilters.module.css';

type RepoFiltersProps = {
  languages: LanguageFilter[];
} & FiltersAPI;

function RepoFilters({
  state,
  changeSort,
  changeLanguage,
  changeType,
  setLanguages,
  setQuery,
  languages,
}: RepoFiltersProps) {
  useEffect(() => {
    setLanguages(languages);
  }, [languages, setLanguages]);

  return (
    <div className={styles.container}>
      <div className="flex-grow">
        <input
          type="search"
          name="search"
          id="search"
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
              { value: RepositoryOrderField.UpdatedAt, label: 'Last updated' },
              { value: RepositoryOrderField.Name, label: 'Name' },
              { value: RepositoryOrderField.Stargazers, label: 'Stars' },
            ]}
            onChange={changeSort}
          />
        </div>
      </div>
    </div>
  );
}

export default RepoFilters;
