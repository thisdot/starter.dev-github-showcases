<script lang="ts">
  import FilterDropdown from '$lib/components/shared/FilterDropdown/FilterDropdown.svelte';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';
  import { createEventDispatcher } from 'svelte';
  import type { RepoFiltersState } from './repo-filters-state';

  export let reposCount = 0;
  export let typeFilters: FilterDropdownOption[] = [];
  export let languageFilters: FilterDropdownOption[] = [];
  export let sortFilters: FilterDropdownOption[] = [];

  const defaultFilters: RepoFiltersState = {
    type: typeFilters[0],
    language: languageFilters[0],
    sort: sortFilters[0],
    searchInput: '',
  };

  const currentFilters = {
    type: defaultFilters.type,
    language: defaultFilters.language,
    sort:  defaultFilters.sort,
    searchInput: defaultFilters.searchInput,
  };

  $: hasActiveFilters = 
    currentFilters.type !== defaultFilters.type ||
    currentFilters.language !== defaultFilters.language ||
    currentFilters.sort !== defaultFilters.sort ||
    currentFilters.searchInput;

  const dispatch = createEventDispatcher();

  // how to use:
  // const handleFiltersChange: (event: CustomEvent<RepoFiltersState>) => void;
  //
  // on:filtersChange={handleFiltersChange}
  const dispatchFiltersChange = () => {
    dispatch('filtersChange', currentFilters);
  };

  const handleTypeFilterChange = (event: CustomEvent<FilterDropdownOption>): void => {
    currentFilters.type = event.detail;
    dispatchFiltersChange();
  };
  const handleLanguageFilterChange = (event: CustomEvent<FilterDropdownOption>): void => {
    currentFilters.language = event.detail;
    dispatchFiltersChange();
  };
  const handleSortFilterChange = (event: CustomEvent<FilterDropdownOption>): void => {
    currentFilters.sort = event.detail;
    dispatchFiltersChange();
  };
  const handleSearchInputChange = (): void => {
    dispatchFiltersChange();
  }
</script>

<section class="repo-controls-container">
  <div class="controls">
    <input
      id="searchInput"
      class="search-input"
      aria-label="Search repository"
      type="search"
      placeholder="Find a repository..."
      bind:value={currentFilters.searchInput}
      on:change={handleSearchInputChange}
    />
    <FilterDropdown
      name="Type"
      description="Select Type"
      items={typeFilters}
      defaultFilter={defaultFilters.type}
      on:setFilter={handleTypeFilterChange}
    />
    <FilterDropdown
      name="Language"
      description="Select Language"
      items={languageFilters}
      defaultFilter={defaultFilters.language}
      on:setFilter={handleLanguageFilterChange}
    />
    <FilterDropdown
      name="Sort"
      description="Select Sort"
      items={sortFilters}
      defaultFilter={defaultFilters.sort}
      on:setFilter={handleSortFilterChange}
    />
  </div>
  <div class="divider" />
  {#if hasActiveFilters}
    <div class="results">
      <p class="results__text">
        <span class="bold">{reposCount}</span>
        results
        {#if currentFilters.type !== defaultFilters.type}
          for <span class="bold">{currentFilters.type?.label}</span>
          repositories
        {/if}
        {#if currentFilters.searchInput}
          matching <span class="bold">{currentFilters.searchInput}</span>
        {/if}
        {#if currentFilters.language !== defaultFilters.language}
          written in
          <span class="bold">
            {currentFilters.language?.label}
          </span>
        {/if}
        sorted by
        <span class="bold">
          {currentFilters.sort?.label.toLowerCase()}
        </span>
      </p>
    </div>
    <div class="divider" />
  {/if}
</section>

<style lang="scss">
@use 'src/lib/styles/variables.scss';

.repo-controls-container {
  .controls {
    margin-bottom: 1rem;
    display: flex;
    gap: .5rem;
    .search-input {
      font-size: .875rem;
      line-height: 1.25rem;
      padding: 0.375rem;
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-radius: 0.375rem;
      border: 1px solid variables.$gray300;
      flex-grow: 1;
    }
  }
  .divider {
    border-bottom: 1px solid variables.$gray300;
  }
}
</style>