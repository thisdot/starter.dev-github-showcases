<script lang="ts">
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
  $: ({ login, avatarUrl } = data);
</script>

<div class="page">
  <header class="nav">
    <NavBar username={login} userAvatar={avatarUrl} />
  </header>
  <main class="main">
    <slot />
  </main>
</div>
