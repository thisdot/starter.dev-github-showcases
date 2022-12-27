<script lang="ts">
  import FileExplorerContainer from '$lib/components/FileExplorer/FileExplorerContainer/FileExplorerContainer.svelte';
  import FileExplorerNav from '$lib/components/FileExplorer/FileExplorerNav/FileExplorerNav.svelte';
  import FileExplorerReadme from '$lib/components/FileExplorer/FileExplorerReadme/FileExplorerReadme.svelte';
  import RepositoryDetails from '$lib/components/Repository/RepositoryDetails.svelte';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';
  import LayoutSidebar from '$lib/components/shared/layouts/LayoutSidebar.svelte';
  import { PAGE_IDS } from '$lib/constants/page-ids';
  import { currentPageId } from '$lib/stores/current-page-id';
  import type { PageServerData } from './$types';
  export let data: PageServerData;

  $: ({
    parentHref,
    contents,
    branches,
    defaultBranch,
    currentBranch,
    repositoryState,
    readmeHtml,
  } = data);

  currentPageId.set(PAGE_IDS.REPOSITORY.CODE);
</script>

<LayoutPageContentRow>
  <LayoutSidebar>
    <FileExplorerNav {branches} {defaultBranch} {currentBranch} />
    <FileExplorerContainer {parentHref} {contents} />
    <div class="readme">
      <FileExplorerReadme html={readmeHtml} />
    </div>
    <RepositoryDetails {repositoryState} slot="sidebar-right" />
  </LayoutSidebar>
</LayoutPageContentRow>

<style lang="scss">
  .readme {
    margin-top: 1rem;
  }
</style>
