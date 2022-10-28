import { $, component$ } from '@builder.io/qwik';
import * as styles from './repo-filters.classNames';
import cn from 'classnames';
import { LanguageFilter, TypeFilter, RepositoryOrderField } from './types';
import { FilterDropdown } from '../filter-dropdown/filter-dropdown';
import { XmarkIcon } from '../icons';
import { SearchInput } from '../search-input/search-input';

export type RepoFiltersProps = {
  languages: LanguageFilter[];
  resultCount: number;
};

export const RepoFilters = component$(({ languages, resultCount }: RepoFiltersProps) => {
  const resetFilters$ = $(() => {
    // TODO: logic for reset filters
    console.log('reset filters');
  });

  // TODO: logic for this
  const isFiltersActive = false;
  const isQueryActive = false;
  const isTypeActive = false;
  const isLanguageActive = false;

  return (
    <>
      <div className={styles.container}>
        <div className="grow">
          <SearchInput className={styles.searchInput} placeholder="Search repositories..." />
        </div>
        <div className={styles.filters}>
          <div>
            <FilterDropdown
              name="Type"
              description="Select type"
              current=""
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
            />
          </div>
          <div>
            <FilterDropdown name="Language" description="Select language" current="" items={languages} />
          </div>
          <div>
            <FilterDropdown
              name="Sort"
              description="Select order"
              current=""
              items={[
                {
                  value: RepositoryOrderField.UpdatedAt,
                  label: 'Last updated',
                },
                { value: RepositoryOrderField.Name, label: 'Name' },
                { value: RepositoryOrderField.Stargazers, label: 'Stars' },
              ]}
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
            results for {isTypeActive && <span className="font-semibold">[ current value (TBD) ]</span>} repositories{' '}
            {isQueryActive && (
              <>
                matching <span className="font-semibold">[ current value (TBD) ]</span>
              </>
            )}{' '}
            {isLanguageActive && (
              <>
                written in <span className="font-semibold capitalize">[ current value (TBD) ]</span>
              </>
            )}{' '}
            sorted by <span className="font-semibold">[ current value (TBD) ]</span>
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
