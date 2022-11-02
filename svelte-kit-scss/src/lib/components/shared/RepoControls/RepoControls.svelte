<script lang="ts">
  import FilterDropdown from '$lib/components/shared/FilterDropdown/FilterDropdown.svelte';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';

  export let reposCount = 0;
  export let typeFilters: FilterDropdownOption[] = [];
  export let languageFilters: FilterDropdownOption[] = [];
  export let sortFilters: FilterDropdownOption[] = [];

  const defaultFilters = {
    type: typeFilters[0],
    language: languageFilters[0],
    sort: sortFilters[0],
    searchInput: '',
  } as const;

  let currentTypeFilter: FilterDropdownOption = defaultFilters.type;
  let currentLanguageFilter: FilterDropdownOption = defaultFilters.language;
  let currentSortFilter: FilterDropdownOption = defaultFilters.sort;
  let searchInput = defaultFilters.searchInput;

  $: hasActiveFilters =
    currentTypeFilter !== defaultFilters.type ||
    currentLanguageFilter !== defaultFilters.language ||
    currentSortFilter ||
    defaultFilters.sort ||
    searchInput ||
    defaultFilters.searchInput;

  const handleTypeFilterChange = (event: CustomEvent<FilterDropdownOption>): void => {
    currentTypeFilter = event.detail;
  };
  const handleLanguageFilterChange = (event: CustomEvent<FilterDropdownOption>): void => {
    currentLanguageFilter = event.detail;
  };
  const handleSortFilterChange = (event: CustomEvent<FilterDropdownOption>): void => {
    currentSortFilter = event.detail;
  };
</script>

<section>
  <div class="controls">
    <input
      id="searchInput"
      aria-label="Search repository"
      type="search"
      placeholder="Find a repository..."
      bind:value={searchInput}
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
  {#if hasActiveFilters}
    <div class="divider" />
    <div class="results">
      <p class="results__text">
        <span class="bold">{reposCount}</span>
        results
        {#if currentTypeFilter !== defaultFilters.type}
          for <span class="bold">{currentTypeFilter.label}</span>
          repositories
        {/if}
        {#if searchInput}
          matching <span class="bold">{searchInput}</span>
        {/if}
        {#if currentLanguageFilter !== defaultFilters.language}
          written in
          <span class="bold">
            {currentLanguageFilter.label}
          </span>
        {/if}
        sorted by
        <span class="bold">
          {currentSortFilter.label?.toLowerCase()}
        </span>
      </p>
    </div>
    <div class="divider" />
  {/if}
</section>
