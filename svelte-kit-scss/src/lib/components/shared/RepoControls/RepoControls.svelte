<script lang="ts">
  import FilterDropdown from '$lib/components/shared/FilterDropdown/FilterDropdown.svelte';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';
  import { createEventDispatcher } from 'svelte';
  import type { RepoFiltersState } from './repo-filters-state';
  import { X16 } from 'svelte-octicons';

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
    sort: defaultFilters.sort,
    searchInput: defaultFilters.searchInput,
  };

  $: hasActiveFilters =
    currentFilters.type !== defaultFilters.type ||
    currentFilters.language !== defaultFilters.language ||
    currentFilters.sort !== defaultFilters.sort ||
    !!currentFilters.searchInput;

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
  };
  const handleClearFilters = (): void => {
    currentFilters.language = defaultFilters.language;
    currentFilters.type = defaultFilters.type;
    currentFilters.sort = defaultFilters.sort;
    currentFilters.searchInput = defaultFilters.searchInput;
    dispatchFiltersChange();
  };
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
      on:input={handleSearchInputChange}
    />
    <FilterDropdown
      name="Type"
      description="Select Type"
      items={typeFilters}
      defaultFilter={defaultFilters.type}
      on:setFilter={handleTypeFilterChange}
      bind:current={currentFilters.type}
    />
    <FilterDropdown
      name="Language"
      description="Select Language"
      items={languageFilters}
      defaultFilter={defaultFilters.language}
      on:setFilter={handleLanguageFilterChange}
      bind:current={currentFilters.language}
    />
    <FilterDropdown
      name="Sort"
      description="Select Sort"
      items={sortFilters}
      defaultFilter={defaultFilters.sort}
      on:setFilter={handleSortFilterChange}
      bind:current={currentFilters.sort}
    />
  </div>
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
      <div>
        <button class="clear-btn group" on:click={handleClearFilters}>
          <span class="clear-btn-icon-container">
            <span class="clear-btn-icon">
              <X16 />
            </span>
          </span>
          <span class="clear-btn-text"> Clear filter </span>
        </button>
      </div>
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
      gap: 0.5rem;

      .search-input {
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.375rem;
        outline: 2px solid transparent;
        outline-offset: 2px;
        border-radius: 0.375rem;
        border: 1px solid variables.$gray300;
        flex-grow: 1;
      }
    }
    .results {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .clear-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0px;
      background: none;

      &.group:hover {
        .clear-btn-icon-container {
          background-color: variables.$blue500;
        }
        .clear-btn-text {
          color: variables.$blue500;
        }
      }

      .clear-btn-icon-container {
        padding: 0.125rem;
        border-radius: 0.25rem;
        background-color: variables.$gray500;
        margin-right: 0.5rem;

        .clear-btn-icon {
          width: 0.875rem;
          height: 0.875rem;
          color: white;
        }
      }

      .clear-btn-text {
        font-size: 1rem;
        color: variables.$gray500;
      }
    }

    .divider {
      border-bottom: 1px solid variables.$gray300;
    }
  }
</style>
