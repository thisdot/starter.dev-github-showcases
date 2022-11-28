<script lang="ts">
  import { goto, prefetch } from '$app/navigation';
  import SelectButton from '$lib/components/shared/buttons/SelectButton.svelte';
  import DropdownMenuSelect from '$lib/components/shared/Dropdown/DropdownMenuSelect/DropdownMenuSelect.svelte';
  import { IssueState } from '$lib/interfaces';
  import IssueStateIcon from '../IssueSearchListItem/IssueStateIcon.svelte';
  import DropdownFilterTextButton from './DropdownFilterTextButton.svelte';
  import type { NavigationFilterOption } from './models';

  export let sortFilters: NavigationFilterOption[];
  export let stateFilters: NavigationFilterOption[];
  export let milestoneFilters: NavigationFilterOption[];

  const handleFilterSelect = async (option: NavigationFilterOption): Promise<void> => {
    if (option.active) {
      return;
    }
    await prefetch(option.href);
    await goto(option.href);
  };

  const resolveStateFilterIssueState = (option: NavigationFilterOption): IssueState | undefined => {
    let result: IssueState | undefined;
    if (option.label.endsWith('Closed')) {
      result = IssueState.Closed;
    } else if (option.label.endsWith('Open')) {
      result = IssueState.Open;
    }
    return result;
  };
</script>

<div class="issue-search-controls">
  <div class="primary">
    <SelectButton
      options={stateFilters}
      labelAccessor={(x) => x.label}
      checkedPredicate={(x) => x.active}
      on:select={async ({ detail }) => await handleFilterSelect(detail)}
    >
      <svelte:fragment slot="option-icon-left" let:option>
        {#each [resolveStateFilterIssueState(option)] as state}
          {#if state}
            <IssueStateIcon {state} />
          {/if}
        {/each}
      </svelte:fragment>
    </SelectButton>
  </div>
  <div class="secondary">
    <DropdownMenuSelect
      description="Filter by milestone"
      options={milestoneFilters}
      labelAccessor={(x) => x.label}
      checkedPredicate={(x) => x.active}
      on:select={async ({ detail }) => await handleFilterSelect(detail)}
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
