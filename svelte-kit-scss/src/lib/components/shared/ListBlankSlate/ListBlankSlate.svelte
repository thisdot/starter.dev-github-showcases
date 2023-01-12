<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let heading: string;
  export let icon: ComponentType | undefined = undefined;
</script>

<div class="list-blank-slate">
  <div class="icon">
    {#if icon}
      <svelte:component this={icon} />
    {/if}
  </div>
  <h2 class="heading">
    {heading}
  </h2>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .list-blank-slate {
    padding: 2em;
    .icon {
      text-align: center;
      color: variables.$gray600;
    }
    .heading {
      text-align: center;
      font-size: 1.5em;
      font-weight: 600;
    }
  }
</style>
