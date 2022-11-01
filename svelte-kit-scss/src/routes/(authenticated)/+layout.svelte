<script lang="ts">
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
</script>

<div class="page">
  <header class="nav">
    <NavBar username={data?.userInfo.username} userAvatar={data?.userInfo.avatar} />
  </header>
  <main class="main">
    <slot />
  </main>
</div>
