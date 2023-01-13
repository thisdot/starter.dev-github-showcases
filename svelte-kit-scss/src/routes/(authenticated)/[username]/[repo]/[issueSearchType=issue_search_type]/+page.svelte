<script lang="ts">
  import type { PageServerData } from './$types';
  import Pagination from '$lib/components/shared/Pagination/Pagination.svelte';
  import IssueSearchList from '$lib/components/IssueSearch/IssueSearchList.svelte';
  import IssueSearchControls from '$lib/components/IssueSearch/IssueSearchControls/IssueSearchControls.svelte';
  import BoxLayout from '$lib/components/shared/layouts/BoxLayout.svelte';
  import { currentPageId } from '$lib/stores/current-page-id';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';
  import ListBlankSlate from '$lib/components/shared/ListBlankSlate/ListBlankSlate.svelte';
  import { IssueOpened24 } from 'svelte-octicons';
  import { PAGE_IDS } from '$lib/constants/page-ids';

  export let data: PageServerData;

  $: ({ issues, sortFilters, stateFilters, milestoneFilters, labelFilters, pageId, pagination } =
    data);
  $: currentPageId.set(pageId);
  $: hasIssues = issues.length;
  $: pull = pageId === PAGE_IDS.REPOSITORY.PULLS;
</script>

<LayoutPageContentRow marginBottom>
  <BoxLayout>
    <IssueSearchControls
      slot="header"
      {sortFilters}
      {stateFilters}
      {milestoneFilters}
      {labelFilters}
      {pull}
    />
    {#if hasIssues}
      <IssueSearchList items={issues} />
    {:else}
      <ListBlankSlate heading="No results matched your search." icon={IssueOpened24} />
    {/if}
    <svelte:fragment slot="bottom">
      {#if hasIssues}
        <div class="bottom">
          <Pagination model={pagination} />
        </div>
      {/if}
    </svelte:fragment>
  </BoxLayout>
</LayoutPageContentRow>

<style lang="scss">
  .bottom {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
</style>
