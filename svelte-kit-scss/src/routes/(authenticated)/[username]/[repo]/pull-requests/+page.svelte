<script lang="ts">
  import type { PageServerData } from './$types';
  import PRsList from '$lib/components/PRsList/PRsList.svelte';

  export let data: PageServerData;

  const { openPRs, closedPRs } = data;

  let viewState = 'open';
</script>

<div class="container">
  <span> header should go here </span>
  <div class="issues-container">
    <PRsList prs={viewState === 'open' ? openPRs : closedPRs} />
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
