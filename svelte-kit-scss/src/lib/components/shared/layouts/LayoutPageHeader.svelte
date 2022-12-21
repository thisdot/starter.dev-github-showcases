<script lang="ts">
  import { browser } from '$app/environment';
  import { onDestroy, onMount } from 'svelte';
  export let gray = false;

  const handleScroll = () => {
    // todo: handle sticky
  };

  if (browser && $$slots.sticky) {
    onMount(() => {
      document.addEventListener('scroll', handleScroll);
    });

    onDestroy(() => {
      document.removeEventListener('scroll', handleScroll);
    });
  }
</script>

<div class="layout-page-header" class:gray>
  <slot />
  {#if $$slots.sticky}
    <div class="sticky">
      <slot name="sticky" />
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .layout-page-header {
    border-bottom: 1px solid variables.$gray300;
    overflow-x: hidden;
    margin-bottom: 1rem;
    &.gray {
      background-color: variables.$gray100;
    }
  }
</style>
