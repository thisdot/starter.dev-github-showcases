<script lang="ts">
  import TopRepositoriesList from '$lib/components/RepositoryList/TopRepositoriesList/TopRepositoriesList.svelte';
  import Gists from '$lib/components/Gists/Gists.svelte';
  import type { PageServerData } from './$types';
  import LayoutSidebar from '$lib/components/shared/layouts/LayoutSidebar.svelte';
  export let data: PageServerData;

  $: ({ topRepositoriesListViewModel } = data);
</script>

<div class="page-container">
  <LayoutSidebar>
    <div slot="sidebar-left" class="sidebar">
      {#if data?.gists}
        <Gists gists={data.gists} />
      {/if}
    </div>
    <div class="main">
      <h3>Top Repositories</h3>
      <TopRepositoriesList model={topRepositoriesListViewModel} />
    </div>
  </LayoutSidebar>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .page-container {
    background-color: variables.$white;
    .sidebar {
      padding: 2em;
    }
    .main {
      background-color: variables.$gray100;
      padding: 2em;
    }
  }
</style>
