<script lang="ts">
  import type { PageServerData } from './$types';
  import IssuesList from '$lib/components/IssuesList/IssuesList.svelte';
  import IssueHeader from '$lib/components/IssueHeader/IssueHeader.svelte';
  import Pagination from '$lib/components/shared/Pagination/Pagination.svelte';
  // import type { PR_STATE } from '$lib/interfaces';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';
  import IssueSearchList from '$lib/components/IssueSearch/IssueSearchList.svelte';
  import IssueSearchControls from '$lib/components/IssueSearch/IssueSearchControls/IssueSearchControls.svelte';
  import BoxLayout from '$lib/components/shared/layouts/BoxLayout.svelte';

  export let data: PageServerData;

  const { issues, openIssuesCount, closedIssuesCount } = data;

  const sortFilters: FilterDropdownOption<string>[] = [
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

  const milestoneFilters: FilterDropdownOption<string>[] = [
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

  const labelFilters: FilterDropdownOption<string>[] = [
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

  // let viewState: PR_STATE = 'open';
</script>

<BoxLayout>
  <svelte:fragment slot="header">
    <IssueSearchControls />
  </svelte:fragment>
  <IssueSearchList items={issues} />
  <svelte:fragment slot="footer">
    <Pagination />
  </svelte:fragment>
</BoxLayout>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
</style>
