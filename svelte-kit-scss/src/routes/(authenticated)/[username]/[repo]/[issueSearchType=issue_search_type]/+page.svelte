<script lang="ts">
  import type { PageServerData } from './$types';
  import Pagination from '$lib/components/shared/Pagination/Pagination.svelte';
  import IssueSearchList from '$lib/components/IssueSearch/IssueSearchList.svelte';
  import IssueSearchControls from '$lib/components/IssueSearch/IssueSearchControls/IssueSearchControls.svelte';
  import BoxLayout from '$lib/components/shared/layouts/BoxLayout.svelte';
  import { currentPageId } from '$lib/stores/current-page-id';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';

  export let data: PageServerData;

  $: ({ issues, sortFilters, stateFilters, milestoneFilters, pageId } = data);
  $: currentPageId.set(pageId);
</script>

<LayoutPageContentRow>
  <BoxLayout>
    <IssueSearchControls slot="header" {sortFilters} {stateFilters} {milestoneFilters} />
    <IssueSearchList items={issues} />
    <Pagination slot="bottom" />
  </BoxLayout>
</LayoutPageContentRow>
