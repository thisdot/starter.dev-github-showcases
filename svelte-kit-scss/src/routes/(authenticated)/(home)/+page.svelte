<script lang="ts">
  import TopRepositories from '$lib/components/TopRepositories/TopRepositories.svelte';
  import Gists from '$lib/components/Gists/Gists.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<div class="container">
  <div class="page-container">
    <aside>
      {#if data?.gists}
        <Gists gists={data.gists} />
      {/if}
    </aside>
    {#if data?.topRepos}
      <TopRepositories repos={data.topRepos} username={data?.username} />
    {/if}
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
  }

  aside {
    background: variables.$white;
    padding: 2rem;
    @media (max-width: variables.$md) {
      order: 2;
    }
  }
</style>
