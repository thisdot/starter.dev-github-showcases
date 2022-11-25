<script lang="ts">
  import type { PageServerData } from './$types';
  import Pagination from '$lib/components/shared/Pagination/Pagination.svelte';
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
