<script lang="ts">
  import RepoHeader from '$lib/components/Repo/RepoHeader/RepoHeader.svelte';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
  const { repoInfo } = data;
</script>

<div>
  <RepoHeader {repoInfo} />
  <slot />
</div>
