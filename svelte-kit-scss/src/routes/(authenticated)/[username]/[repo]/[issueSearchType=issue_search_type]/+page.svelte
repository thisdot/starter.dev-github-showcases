<script lang="ts">
  import type { PageServerData } from './$types';
  import Pagination from '$lib/components/shared/Pagination/Pagination.svelte';
  import IssueSearchList from '$lib/components/IssueSearch/IssueSearchList.svelte';
  import IssueSearchControls from '$lib/components/IssueSearch/IssueSearchControls/IssueSearchControls.svelte';
  import BoxLayout from '$lib/components/shared/layouts/BoxLayout.svelte';
  import { currentPageId } from '$lib/stores/current-page-id';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';

  export let data: PageServerData;

  $: ({ issues, sortFilters, stateFilters, milestoneFilters, labelFilters, pageId, pagination } =
    data);
  $: currentPageId.set(pageId);
</script>

<LayoutPageContentRow marginBottom>
  <BoxLayout>
    <IssueSearchControls
      slot="header"
      {sortFilters}
      {stateFilters}
      {milestoneFilters}
      {labelFilters}
    />
    <IssueSearchList items={issues} />
    <div slot="bottom" class="bottom">
      <Pagination model={pagination} />
    </div>
  </BoxLayout>
</LayoutPageContentRow>

<style lang="scss">
  .bottom {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
</style>
