<script lang="ts">
  import { browser } from '$app/environment';
  import { onDestroy, onMount } from 'svelte';
  export let gray = false;
  export let paddingTop = false;
  let stickyElement: HTMLDivElement;
  let headerElement: HTMLDivElement;

  let stickyElementTopPx: number | undefined;
  let headerElementLeftPx: number | undefined;
  let headerElementWidthPx: number | undefined;

  const handleScroll = () => {
    const rectSticky = stickyElement?.getBoundingClientRect();
    stickyElementTopPx = rectSticky?.top;

    const rectHeader = headerElement?.getBoundingClientRect();
    headerElementLeftPx = rectHeader?.left;
    headerElementWidthPx = rectHeader?.width;
  };

  if (browser && $$slots.sticky) {
    onMount(() => {
      document.addEventListener('scroll', handleScroll);
    });

    onDestroy(() => {
      document.removeEventListener('scroll', handleScroll);
    });
  }
  $: showStickyProjection = (stickyElementTopPx || 0) < 0;
</script>

<div class="layout-page-header" class:gray class:padding-top={paddingTop} bind:this={headerElement}>
  <slot />
  {#if $$slots.sticky}
    <div class="sticky" bind:this={stickyElement}>
      <slot name="sticky" />
    </div>
  {/if}
</div>
{#if showStickyProjection}
  <div
    class="layout-page-header sticky-projection"
    class:gray
    class:padding-top={paddingTop}
    style={`left: ${headerElementLeftPx}px; width: ${headerElementWidthPx}px;`}
  >
    <div class="sticky">
      <slot name="sticky" />
    </div>
  </div>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .layout-page-header {
    border-bottom: 1px solid variables.$gray300;
    margin-bottom: 1rem;
    background-color: variables.$white;
    &.padding-top {
      padding-top: 1rem;
    }
    &.gray {
      background-color: variables.$gray100;
    }
    &.padding-top {
      padding-top: 1rem;
    }
    &.sticky-projection {
      position: fixed;
      z-index: 99;
      top: 0;
    }
  }
</style>
