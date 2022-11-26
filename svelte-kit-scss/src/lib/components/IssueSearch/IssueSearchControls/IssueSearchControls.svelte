<script lang="ts">
  import { goto, prefetch } from '$app/navigation';
  import DropdownMenuSelect from '$lib/components/shared/Dropdown/DropdownMenuSelect/DropdownMenuSelect.svelte';
  import DropdownFilterTextButton from './DropdownFilterTextButton.svelte';
  import type { NavigationFilterOption } from './models';

  export let sortFilters: NavigationFilterOption[];

  const handleFilterSelect = async (option: NavigationFilterOption): Promise<void> => {
    if (option.active) {
      return;
    }
    await prefetch(option.href);
    await goto(option.href);
  };
</script>

<div class="issue-search-controls">
  <DropdownMenuSelect
    description="Sort by"
    options={sortFilters}
    labelAccessor={(x) => x.label}
    checkedPredicate={(x) => x.active}
    on:select={async ({ detail }) => await handleFilterSelect(detail)}
  >
    <DropdownFilterTextButton text="Sort" />
  </DropdownMenuSelect>
</div>

<style lang="scss">
</style>
