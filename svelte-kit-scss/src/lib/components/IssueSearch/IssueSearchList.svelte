<script lang="ts">
  import type { Issue } from '$lib/interfaces';
  import IssueSearchListItem from './IssueSearchListItem/IssueSearchListItem.svelte';

  export let items: Issue[];
</script>

<div class="issue-search-list">
  {#each items as item}
    <div class="item-row">
      <IssueSearchListItem {item} />
    </div>
  {/each}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .issue-search-list {
    .item-row {
      border-bottom: 1px solid variables.$gray300;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: variables.$gray100;
      }
    }
  }
</style>
