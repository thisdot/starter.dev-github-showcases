<script lang="ts">
  import IssueStateIcon from '../IssueSearchListItem/IssueStateIcon.svelte';
  import { IssueState } from '$lib/interfaces';
  import type { NavigationFilterOption } from '$lib/components/shared/models/navigation-filter-option';

  export let options: NavigationFilterOption[];
  $: [openFilter, closedFilter] = options;
</script>

<div class="issue-state-filters">
  <a
    class="link"
    href={openFilter.href}
    class:active={openFilter.active}
    data-sveltekit-preload-data="off"
    ><IssueStateIcon state={IssueState.Open} /><span>{openFilter.label}</span></a
  >
  <a
    class="link"
    href={closedFilter.href}
    class:active={closedFilter.active}
    data-sveltekit-preload-data="off"
    ><IssueStateIcon state={IssueState.Closed} /><span>{closedFilter.label}</span></a
  >
</div>

<style lang="scss">
  .issue-state-filters {
    display: flex;
    gap: 1em;
    .link {
      text-decoration: none;
      opacity: 0.7;
      color: inherit;
      display: flex;
      align-items: center;
      gap: 0.25em;
      &.active {
        font-weight: 600;
      }
      &:hover,
      &.active {
        opacity: 1;
      }
    }
  }
</style>
