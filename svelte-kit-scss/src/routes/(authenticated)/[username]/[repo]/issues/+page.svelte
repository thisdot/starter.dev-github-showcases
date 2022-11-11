<script lang="ts">
  import type { PageServerData } from './$types';
  import IssuesList from '$lib/components/IssuesList/IssuesList.svelte';

  export let data: PageServerData;

  const { openIssues, closedIssues } = data;

  let viewState = 'open';
</script>

<div class="container">
  <span> header should go here </span>
  <div class="issues-container">
    <IssuesList issues={viewState === 'open' ? openIssues : closedIssues} />
  </div>
  <span> Pagination should go here </span>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .issues-container {
    border-radius: 0.5rem;
    border: 1px solid variables.$gray200;
    margin: 2rem auto;
  }
</style>
