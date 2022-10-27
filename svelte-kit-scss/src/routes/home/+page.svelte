<script lang="ts">
  import TopRepositories from "$lib/components/TopRepositories/TopRepositories.svelte";
  import type {PageServerData} from './$types';

  export let data: PageServerData

</script>

<svelte:head>
  <title>Home </title>
</svelte:head>

<div class="container">
  <h1>SvelteKit with SCSS Starter Kit</h1>
  <ul class="links">
    <li>
      <a href="/counter">See Counter example component</a>
    </li>
    <li>
      <a href="/api-example">See Fetch example component</a>
    </li>
  </ul>

  <div class="page-container">
    <aside>
      <div>something</div>
    </aside>
    <TopRepositories repos={data.topRepos} username="thisdot"/>
  </div>
</div>

<style lang="scss">
  @use '../../lib/styles/variables.scss';

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
