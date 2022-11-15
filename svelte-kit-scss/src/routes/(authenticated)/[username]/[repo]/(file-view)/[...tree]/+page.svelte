<script lang="ts">
  import FileExplorerAbout from '$lib/components/FileExplorer/FileExplorerAbout/FileExplorerAbout.svelte';
  import FileExplorerContainer from '$lib/components/FileExplorer/FileExplorerContainer/FileExplorerContainer.svelte';
  import FileExplorerNav from '$lib/components/FileExplorer/FileExplorerNav/FileExplorerNav.svelte';
  import FileExplorerReadme from '$lib/components/FileExplorer/FileExplorerReadme/FileExplorerReadme.svelte';
  import type { PageServerData } from './$types';
  export let data: PageServerData;
</script>

<div class="container grid grid-cols-12 subpage">
  <section class="col-span-9 col-sm-span-12">
    <FileExplorerNav />
    <FileExplorerContainer
      folder={data?.folder}
      branch={data?.repoInfo?.defaultBranch}
      username={data?.username}
      repo={data?.repo}
    />
  </section>

  <section class="col-span-3 col-sm-span-12">
    <FileExplorerAbout repoInfo={data?.repoInfo} />
  </section>

  <section class="col-span-9">
    <FileExplorerReadme readme={data?.readme} />
  </section>
</div>

<style lang="scss">
  .container.subpage {
    gap: 2rem;
  }
</style>
