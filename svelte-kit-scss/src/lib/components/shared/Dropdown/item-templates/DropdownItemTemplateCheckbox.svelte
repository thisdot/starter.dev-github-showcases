<script lang="ts">
  import { Check16 } from 'svelte-octicons';

  export let checked = false;
  export let label: string;
</script>

<div class="dropdown-item-template-checkbox" class:checked>
  <div class="check-mark">
    <Check16 class="icon" />
  </div>
  <div class="label" aria-label={label}>
    {label}
  </div>
</div>

<style lang="scss">
  .dropdown-item-template-checkbox {
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
    .label {
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      align-items: center;
    }
  }
</style>
