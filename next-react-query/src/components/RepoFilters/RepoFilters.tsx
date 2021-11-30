import type { FiltersAPI, LanguageFilter } from './useRepoFilters';
import { useEffect } from 'react';
import { RepositoryOrderField } from '@lib/github';
import FilterDropdown from './FilterDropdown';
import { TypeFilter } from './useRepoFilters';

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
    <div className="flex relative mb-4 space-x-4">
      <div className="flex-grow">
        <input
          type="search"
          name="search"
          id="search"
          className="border p-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none"
          placeholder="Find a repository.."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-1.5">
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
