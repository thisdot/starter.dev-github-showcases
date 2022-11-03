<script lang="ts">
  import type { RepoIssue } from '$lib/interfaces';
  import PRIssueCard from '$lib/components/PRIssueCard/PRIssueCard.svelte';

  export let issues: RepoIssue[];
</script>

<div class="issue">
  <div class="issues-list-container">
    {#if Array.isArray(issues)}
      {#each issues as issue}
        <PRIssueCard {issue} />
      {/each}
    {:else}
      <div class="empty-list">
        <strong>No results matched your search.</strong>
      </div>
    {/if}
  </div>
</div>
