import { $, component$, useContext } from '@builder.io/qwik';
import { LanguageFilter, TypeFilter, RepositoryOrderField, DefaultLanguage } from './types';
import { FilterDropdown } from '../filter-dropdown/filter-dropdown';
import { CheckIcon } from '../icons';
import { SearchInput } from '../search-input/search-input';
import filterStore from '../../context/repo-filter';
import { ClearFilterAndSortBtn } from '../clear-filter-and-sort-button/index';

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
      <div class="flex relative mb-4 space-x-4">
        <div class="grow">
          <SearchInput className="w-full" placeholder="Find a repositories..." />
        </div>
        <div class="flex items-center space-x-1.5">
          <div>
            <FilterDropdown name="Type" description="Select type">
              {filteOptions.map(({ label, value }: { label: string; value: string }) => (
                <div>
                  <button
                    onClick$={() => (filters.type = value)}
                    type="button"
                    name={'Type'}
                    class="relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize"
                  >
                    {value === filters.type && <CheckIcon className="inline w-4 h-4 absolute left-4" />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
          <div>
            <FilterDropdown name="Language" description="Select language">
              {languages.map(({ label, value }: { label: string; value: string }) => (
                <div>
                  <button
                    onClick$={() => (filters.language = value)}
                    type="button"
                    name={'language'}
                    class="relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize"
                  >
                    {value === filters.language && <CheckIcon className="inline w-4 h-4 absolute left-4" />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
          <div>
            <FilterDropdown name="Sort" description="Select order">
              {sortOptions.map(({ label, value }: { label: string; value: string }) => (
                <div>
                  <button
                    onClick$={() => (filters.sortBy = value)}
                    type="button"
                    name={'order'}
                    class="relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize"
                  >
                    {value === filters.sortBy && <CheckIcon className="inline w-4 h-4 absolute left-4" />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
        </div>
      </div>
      {isFiltersActive && (
        <div class="py-4 border-t flex items-center justify-between">
          <div class="text-sm">
            <span class="font-semibold" data-testid="filterText">
              {resultCount}
            </span>{' '}
            results for {isTypeActive && <span class="font-semibold">{filters.type}</span>} repositories{' '}
            {isQueryActive && (
              <>
                matching <span class="font-semibold">{filters.search}</span>
              </>
            )}{' '}
            {isLanguageActive && (
              <>
                written in <span class="font-semibold capitalize">{filters.language}</span>
              </>
            )}{' '}
            sorted by <span class="font-semibold">{filters.sortBy.split('_').join(' ').toLowerCase()}.</span>
          </div>
          <ClearFilterAndSortBtn clearFn={resetFilters$} />
        </div>
      )}
    </>
  );
});
