<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let count: number;
  export let label: string;
  export let icon: ComponentType;
</script>

<div class="named-counter">
  <div class="container">
    <div class="name">
      <svelte:component this={icon} />
      <span class="label">
        {label}
      </span>
    </div>
    <div class="count">
      <span class="text">
        {count}
      </span>
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $border: 1px solid variables.$gray300;
  $padding: 0 0.75em;
  .named-counter {
    display: inline-block;
    color: variables.$gray700;
    font-weight: 600;
    font-size: 0.75em;
    white-space: nowrap;
    .container {
      border: $border;
      border-radius: 6px;
      overflow: hidden;
      display: flex;
      align-items: center;
      .name {
        display: flex;
        align-items: center;
        line-height: 1.25em;
        padding: $padding;
        justify-content: space-between;
        gap: 0.5em;
      }
      .count {
        background: variables.$white;
        display: flex;
        align-items: center;
        border-left: $border;
        padding: $padding;
      }
    }
  }
</style>
