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

  $: ({ issues, openIssuesCount, closedIssuesCount, sortFilters } = data);
</script>

<BoxLayout>
  <IssueSearchControls slot="header" {sortFilters} />
  <IssueSearchList items={issues} />
  <Pagination slot="footer" />
</BoxLayout>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
</style>
