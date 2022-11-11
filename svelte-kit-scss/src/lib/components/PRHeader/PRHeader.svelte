<script lang="ts">
  import { Check16, NoEntry16 } from 'svelte-octicons';
  import type { PR_STATE, RepoPullRequests } from '$lib/interfaces';
  import FilterDropdown from '$lib/components/shared/FilterDropdown/FilterDropdown.svelte';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';
  import { createEventDispatcher } from 'svelte';

  export let openPRs: RepoPullRequests | undefined,
    closedPRs: RepoPullRequests | undefined,
    viewState: PR_STATE;

  export let labelFilters: FilterDropdownOption[] = [];
  export let sortFilters: FilterDropdownOption[] = [];

  interface IssueFiltersState {
    label?: FilterDropdownOption;
    sort?: FilterDropdownOption;
  }

  const defaultFilters: IssueFiltersState = {
    label: labelFilters[0],
    sort: sortFilters[0],
  };

  const currentFilters = {
    label: defaultFilters.label,
    sort: defaultFilters.sort,
  };

  // $: hasActiveFilters =
  //   currentFilters.label !== defaultFilters.label || currentFilters.sort !== defaultFilters.sort;

  const dispatch = createEventDispatcher();

  const dispatchFiltersChange = () => {
    dispatch('filtersChange', currentFilters);
  };

  const handleLabelFilterChange = (event: CustomEvent<FilterDropdownOption>): void => {
    currentFilters.label = event.detail;
    dispatchFiltersChange();
  };
  const handleSortFilterChange = (event: CustomEvent<FilterDropdownOption>): void => {
    currentFilters.sort = event.detail;
    dispatchFiltersChange();
  };
</script>

<div class="filters-container">
  <div class="pull-requests-status">
    <button
      class="tab-button"
      class:active={viewState === 'open'}
      on:click={() => (viewState = 'open')}
    >
      <span class="icon">
        <NoEntry16 />
      </span>
      <span>{openPRs?.totalCount ?? 0} Open</span>
    </button>
    <button
      class="tab-button"
      class:active={viewState === 'closed'}
      on:click={() => (viewState = 'closed')}
    >
      <span class="icon">
        <Check16 />
      </span><span>{closedPRs?.totalCount ?? 0} closed</span>
    </button>
  </div>
  <div class="pull-requests-filters">
    <FilterDropdown
      name="Label"
      description="Filter by label"
      items={labelFilters}
      defaultFilter={defaultFilters.label}
      on:setFilter={handleLabelFilterChange}
      isIssue={true}
    />
    <FilterDropdown
      name="Sort"
      description="Sort by"
      items={sortFilters}
      defaultFilter={defaultFilters.sort}
      on:setFilter={handleSortFilterChange}
      isIssue={true}
    />
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .filters-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem;
    background-color: variables.$gray100;

    @media (min-width: variables.$md) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .pull-requests-status {
      display: flex;
      align-items: center;
      font-weight: 600;
      gap: 1rem;
      color: variables.$gray600;

      .tab-button {
        color: inherit;
        display: flex;
        border: none;
        align-items: center;
        cursor: pointer;
        background: inherit;

        .icon {
          margin-right: 0.375rem;
        }

        &.active {
          color: variables.$gray900;
        }
      }
    }

    .pull-requests-filters {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      @media (max-width: variables.$md) {
        margin-top: 0.875rem;
      }
    }
  }
</style>
