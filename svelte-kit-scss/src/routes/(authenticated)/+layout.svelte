<script lang="ts">
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import type { LayoutServerData } from './$types';
  import { browser } from '$app/environment';

  export let data: LayoutServerData;
</script>

<div class="page">
  <header class="nav">
    <NavBar username={data?.userInfo.username} userAvatar={data?.userInfo.avatar} {browser} />
  </header>
  <main class="main">
    <slot />
  </main>
</div>
