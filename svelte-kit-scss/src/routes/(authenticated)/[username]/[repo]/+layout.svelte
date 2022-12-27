<script lang="ts">
  import RepoHeading from '$lib/components/Repo/RepoHeader/RepoHeading/RepoHeading.svelte';
  import RepositoryCounters from '$lib/components/Repository/RepositoryCounters.svelte';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';
  import LayoutPageHeader from '$lib/components/shared/layouts/LayoutPageHeader.svelte';
  import PageNavigtionTabs from '$lib/components/shared/PageNavigationTabs/PageNavigtionTabs.svelte';
  import { currentPageId } from '$lib/stores/current-page-id';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
  $: ({ repositoryState, tabs } = data);
</script>

<LayoutPageHeader gray>
  <LayoutPageContentRow>
    <div class="top">
      <RepoHeading repo={repositoryState} />
      <RepositoryCounters {repositoryState} />
    </div>
    <PageNavigtionTabs {tabs} currentPageId={$currentPageId} />
  </LayoutPageContentRow>
</LayoutPageHeader>
<slot />
