<script lang="ts">
  import RepositoryCounters from '$lib/components/Repository/RepositoryCounters.svelte';
  import RepositoryHeading from '$lib/components/Repository/RepositoryHeading.svelte';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';
  import LayoutPageHeader from '$lib/components/shared/layouts/LayoutPageHeader.svelte';
  import PageNavigtionTabs from '$lib/components/shared/PageNavigationTabs/PageNavigtionTabs.svelte';
  import { currentPageId } from '$lib/stores/current-page-id';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
  $: ({ repositoryState, breadcrumbs, tabs } = data);
</script>

<LayoutPageHeader gray paddingTop>
  <LayoutPageContentRow>
    <div class="top">
      <div class="heading">
        <RepositoryHeading {repositoryState} {breadcrumbs} />
      </div>
      <div class="counters">
        <RepositoryCounters {repositoryState} />
      </div>
    </div>
    <PageNavigtionTabs {tabs} currentPageId={$currentPageId} />
  </LayoutPageContentRow>
</LayoutPageHeader>
<slot />

<style lang="scss">
  .top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1em;
    margin-bottom: 1em;
  }
</style>
