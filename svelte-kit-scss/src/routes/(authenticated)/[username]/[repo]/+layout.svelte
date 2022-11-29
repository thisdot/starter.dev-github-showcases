<script lang="ts">
  import RepoHeader from '$lib/components/Repo/RepoHeader/RepoHeader.svelte';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
  const { repoInfo } = data;
</script>

<div>
  <RepoHeader repo={repoInfo} />
  <div class="main container">
    <slot />
  </div>
</div>

<style lang="scss">
  .container {
    .main {
      padding: 1.5rem;
    }
  }
</style>
