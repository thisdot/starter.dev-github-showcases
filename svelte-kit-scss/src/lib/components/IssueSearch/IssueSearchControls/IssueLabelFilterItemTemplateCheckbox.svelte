<script lang="ts">
  import { Check16 } from 'svelte-octicons';

  export let checked = false;
  export let label: string;
  export let description: string | null | undefined = undefined;
  export let color: string | undefined = undefined;

  $: borderColor = ['fff', 'ffffff'].includes(String(color?.toLowerCase())) ? 'd1d5db' : color;
</script>

<div
  class="issue-label-item-template-checkbox"
  class:checked
  data-testid="issue-label-item-template-checkbox"
>
  <div class="check-mark">
    <Check16 class="icon" />
  </div>
  {#if color}
    <div class="item" aria-label={label}>
      <div class="color" style="border-color: #{borderColor}; background: #{color}CF;" />
      <div class="body">
        <div class="label">{label}</div>
        {#if description}
          <div class="description">{description}</div>
        {/if}
      </div>
    </div>
  {:else}
    <div class="item" aria-label={label}>
      {label}
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .issue-label-item-template-checkbox {
    display: flex;
    gap: 0.25em;
    .check-mark {
      display: flex;
      align-items: center;
      visibility: hidden;
      :global(.icon) {
        width: 1em;
        height: 1em;
      }
    }
    &.checked {
      .check-mark {
        visibility: visible;
      }
    }
    .item {
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      gap: 0.5em;
      .color {
        border-width: 1px;
        border-style: solid;
        border-radius: 100%;
        width: 1em;
        height: 1em;
        margin-top: 0.35em;
      }
      .body {
        .label {
          font-weight: 600;
        }
        .description {
          color: variables.$gray600;
        }
      }
    }
  }
</style>
