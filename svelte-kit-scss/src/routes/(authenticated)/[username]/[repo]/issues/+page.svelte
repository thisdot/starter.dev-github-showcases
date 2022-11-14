<script lang="ts">
  import type { PageServerData } from './$types';
  import IssuesList from '$lib/components/IssuesList/IssuesList.svelte';
  import IssueHeader from '$lib/components/IssueHeader/IssueHeader.svelte';
  import Pagination from '$lib/components/shared/Pagination/Pagination.svelte';
  import type { PR_STATE } from '$lib/interfaces';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';

  export let data: PageServerData;

  const { openIssues, closedIssues } = data;

  const sortFilters: FilterDropdownOption<any>[] = [
    {
      label: 'Dummy 1',
      value: 'dummy-1',
    },
    {
      label: 'Dummy 2',
      value: 'dummy-2',
    },
    {
      label: 'Dummy 3',
      value: 'dummy-3',
    },
  ];

  const milestoneFilters: FilterDropdownOption<any>[] = [
    {
      label: 'Dummy 1',
      value: 'dummy-1',
    },
    {
      label: 'Dummy 2',
      value: 'dummy-2',
    },
    {
      label: 'Dummy 3',
      value: 'dummy-3',
    },
  ];

  const labelFilters: FilterDropdownOption<any>[] = [
    {
      label: 'Dummy 1',
      value: 'dummy-1',
    },
    {
      label: 'Dummy 2',
      value: 'dummy-2',
    },
    {
      label: 'Dummy 3',
      value: 'dummy-3',
    },
  ];

  let viewState: PR_STATE = 'open';
</script>

<div class="container">
  <div class="issues-container">
    <IssueHeader
      {openIssues}
      {closedIssues}
      {labelFilters}
      {milestoneFilters}
      {sortFilters}
      bind:viewState
    />
    <IssuesList issues={viewState === 'open' ? openIssues?.issues : closedIssues?.issues} />
  </div>
  <Pagination />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .issues-container {
    border-radius: 0.5rem;
    border: 1px solid variables.$gray200;
    margin: 2rem auto;
  }
</style>
