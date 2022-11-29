<script lang="ts">
  import { goto, prefetch } from '$app/navigation';
  import DropdownMenuSelect from '$lib/components/shared/Dropdown/DropdownMenuSelect/DropdownMenuSelect.svelte';
  import DropdownFilterTextButton from './DropdownFilterTextButton.svelte';
  import type { NavigationFilterOption } from './models';
  import IssueStateFilter from './IssueStateFilter.svelte';

  export let sortFilters: NavigationFilterOption[];
  export let stateFilters: NavigationFilterOption[];
  export let milestoneFilters: NavigationFilterOption[];

  const navigateHref = async (href: string): Promise<void> => {
    await prefetch(href);
    await goto(href);
  };

  const handleFilterSelect = async (
    option: NavigationFilterOption,
    optional = false
  ): Promise<void> => {
    if (!optional && option.active) {
      return;
    }
    await navigateHref(option.href);
  };
</script>

<div class="issue-search-controls">
  <div class="primary">
    <IssueStateFilter options={stateFilters} />
  </div>
  <div class="secondary">
    <DropdownMenuSelect
      description="Filter by milestone"
      options={milestoneFilters}
      labelAccessor={(x) => x.label}
      checkedPredicate={(x) => x.active}
      on:select={async ({ detail }) => await handleFilterSelect(detail, true)}
      direction="left"
    >
      <DropdownFilterTextButton text="Milestone" />
    </DropdownMenuSelect>
    <DropdownMenuSelect
      description="Sort by"
      options={sortFilters}
      labelAccessor={(x) => x.label}
      checkedPredicate={(x) => x.active}
      on:select={async ({ detail }) => await handleFilterSelect(detail)}
      direction="left"
    >
      <DropdownFilterTextButton text="Sort" />
    </DropdownMenuSelect>
  </div>
</div>

<style lang="scss">
  .issue-search-controls {
    display: flex;
    .primary {
      flex: 1;
    }
    .secondary {
      display: flex;
      gap: 1em;
    }
  }
</style>
