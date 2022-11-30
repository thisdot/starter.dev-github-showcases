<script lang="ts">
  import RepoHeader from '$lib/components/Repo/RepoHeader/RepoHeader.svelte';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
  const { repoInfo } = data;
</script>

<RepoHeader repo={repoInfo} />
<div class="container">
  <slot />
</div>

<style lang="scss">
</style>
