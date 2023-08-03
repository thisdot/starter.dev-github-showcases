<script lang="ts">
  import { Icons } from '.';

  export let name: keyof typeof Icons;

  $: component = Icons[name];
</script>

{#if component}
  <svelte:component this={component} />
{/if}
