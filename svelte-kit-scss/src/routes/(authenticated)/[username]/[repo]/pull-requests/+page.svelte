<script lang="ts">
  import type { PageServerData } from './$types';
  import PRsList from '$lib/components/PRsList/PRsList.svelte';
  import PRHeader from '$lib/components/PRHeader/PRHeader.svelte';
  import type { PR_STATE } from '$lib/interfaces';

  export let data: PageServerData;

  const { openPRs, closedPRs } = data;

  // const typeFilters: FilterDropdownOption<TypeFilters>[] = [
  //   {
  //     label: 'All',
  //     value: TypeFilters.ALL,
  //   },
  //   {
  //     label: 'Forked',
  //     value: TypeFilters.FORKED,
  //   },
  //   {
  //     label: 'Archived',
  //     value: TypeFilters.ARCHIVED,
  //   },
  // ];

  let viewState: PR_STATE = 'open';
</script>

<div class="container">
  <div class="issues-container">
    <PRHeader {openPRs} {closedPRs} bind:viewState />
    <PRsList prs={viewState === 'open' ? openPRs?.pullRequests : closedPRs?.pullRequests} />
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
