<script lang="ts">
  import TopRepositoriesList from '$lib/components/RepositoryList/TopRepositoriesList/TopRepositoriesList.svelte';
  import Gists from '$lib/components/Gists/Gists.svelte';
  import type { PageServerData } from './$types';
  export let data: PageServerData;

  $: ({ topRepositoriesListViewModel } = data);
</script>

<div class="container">
  <div class="page-container">
    <aside>
      {#if data?.gists}
        <Gists gists={data.gists} />
      {/if}
    </aside>
    <div class="top-repositories">
      <h3>Top Repositories</h3>
      <TopRepositoriesList model={topRepositoriesListViewModel} />
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .page-container {
    display: grid;
    grid-template-columns: 1fr;
    background: variables.$gray100;
    @media (min-width: variables.$md) {
      grid-template-columns: 24rem 1fr;
    }

    aside {
      background: variables.$white;
      padding: 2rem;
      @media (max-width: variables.$md) {
        order: 2;
      }
    }
    .top-repositories {
      padding: 1em;
    }
  }
</style>
