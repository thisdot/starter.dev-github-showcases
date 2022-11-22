<script lang="ts">
  import type { RepoPullRequest } from '$lib/interfaces';
  import PRIssueCard from '$lib/components/PRIssueCard/PRIssueCard.svelte';

  export let prs: RepoPullRequest[] | undefined;
</script>

<div class="pull-requests">
  <div class="pull-requests-list-container">
    {#if Array.isArray(prs)}
      {#each prs as pr}
        <PRIssueCard issue={pr} />
      {/each}
    {:else}
      <div class="empty-list">
        <strong>No results matched your search.</strong>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .empty-list {
    display: flex;
    height: 10rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
</style>
