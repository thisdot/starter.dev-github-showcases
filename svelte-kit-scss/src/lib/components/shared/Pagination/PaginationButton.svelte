<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let href: string | undefined = undefined;
  export let label: string;
  export let disabled = false;
  export let current = false;
  export let icon: ComponentType | undefined = undefined;
  export let iconPosition: 'start' | 'end' = 'start';
  $: IconComponent = icon;
</script>

{#if disabled || current}
  <span class="pagination-button" class:disabled class:current>
    {#if IconComponent}
      <span class="icon {iconPosition}">
        <IconComponent />
      </span>
    {/if}
    <span>{label}</span>
  </span>
{:else}
  <a {href} class="pagination-button">
    {#if IconComponent}
      <span class="icon {iconPosition}">
        <IconComponent />
      </span>
    {/if}
    <span>{label}</span></a
  >
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  a,
  a:visited {
    color: variables.$blue600;
  }
  .pagination-button {
    display: flex;
    align-items: center;
    gap: 0.25em;
    font-size: 0.875em;
    padding: 0.5em 0.75em;
    text-decoration: none;
    line-height: 1;
    border-radius: 6px;
    border: 1px solid transparent;
    &.disabled {
      color: variables.$gray400;
      border: none;
    }
    &.current {
      background: variables.$blue600;
      color: variables.$white;
      border: none;
      cursor: pointer;
    }
    &:hover {
      border-color: variables.$gray300;
    }
    .icon {
      display: flex;
      align-items: center;
      &.end {
        order: 1;
      }
    }
  }
</style>
