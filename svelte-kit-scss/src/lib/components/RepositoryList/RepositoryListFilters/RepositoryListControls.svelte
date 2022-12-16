<script lang="ts">
  import { goto } from '$app/navigation';
  import DropdownMenuSelect from '$lib/components/shared/Dropdown/DropdownMenuSelect/DropdownMenuSelect.svelte';
  import type { NavigationFilterOption } from '$lib/components/shared/models/navigation-filter-option';
  import {
    buildRepositoryPageHrefForParameter,
    extractRepositoryPageSearchQueryParameters,
    remapRepositorySearchQueryParameters,
  } from '$lib/helpers';
  import type { RepositoryListControlsViewModel } from '../view-models';
  import DropdownButtonOutline from './DropdownButtonOutline.svelte';
  import SearchInputDelayed from './SearchInputDelayed.svelte';

  export let controls: RepositoryListControlsViewModel;
  $: ({ sortFilters, typeFilters, search } = controls);

  const handleFilterSelect = async (option: NavigationFilterOption): Promise<void> => {
    return goto(option.href);
  };

  const handleSearchInput = async (term: string | null): Promise<void> => {
    const currentUrl = new URL(location.href);
    const currentpageSearchQueryParameters = extractRepositoryPageSearchQueryParameters(currentUrl);
    const currentSearchQueryParameters = remapRepositorySearchQueryParameters(
      currentpageSearchQueryParameters
    );
    const href = buildRepositoryPageHrefForParameter(
      currentUrl,
      currentSearchQueryParameters,
      'term',
      term || undefined
    );
    return goto(href);
  };
</script>

<div class="repository-list-controls noselect">
  <div class="controls">
    <div class="search">
      {#if search}
        <SearchInputDelayed
          value={search.term}
          on:input={async ({ detail }) => await handleSearchInput(detail)}
        />
      {/if}
    </div>
    <div>
      {#if sortFilters}
        <DropdownMenuSelect
          description="Sort by"
          options={sortFilters}
          labelAccessor={(x) => x.label}
          checkedPredicate={(x) => x.active}
          on:select={async ({ detail }) => await handleFilterSelect(detail)}
          direction="left"
        >
          <DropdownButtonOutline>Sort</DropdownButtonOutline>
        </DropdownMenuSelect>
      {/if}

      {#if typeFilters}
        <DropdownMenuSelect
          description="Sort by"
          options={typeFilters}
          labelAccessor={(x) => x.label}
          checkedPredicate={(x) => x.active}
          on:select={async ({ detail }) => await handleFilterSelect(detail)}
          direction="left"
        >
          <DropdownButtonOutline>Type</DropdownButtonOutline>
        </DropdownMenuSelect>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $border: 1px solid variables.$gray300;
  .repository-list-controls {
    font-size: 0.875em;
    .controls {
      margin-bottom: 1rem;
      display: flex;
      gap: 0.5em;
      .search {
        flex: 1;
        display: flex;
      }
    }
  }
</style>
