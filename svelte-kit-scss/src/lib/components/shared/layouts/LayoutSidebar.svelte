<script lang="ts">
  type NamedSlot = Exclude<keyof typeof $$slots, 'default'>;
  const SLOT: Record<string, NamedSlot> = {
    left: 'sidebar-left',
    right: 'sidebar-right',
  } as const;
  export let placeholder: NamedSlot | undefined = undefined;
</script>

<div class="layout-sidebar">
  {#if $$slots[SLOT.left] || placeholder === SLOT.left}
    <div class="sidebar left">
      <slot name="sidebar-left" />
    </div>
  {/if}
  <div class="main">
    <slot />
  </div>
  {#if $$slots[SLOT.right] || placeholder === SLOT.right}
    <div class="sidebar right">
      <slot name="sidebar-right" />
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .layout-sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .main {
      flex: 1;
    }
    .sidebar {
      min-width: 0;
      flex: 1;
    }
    @media (min-width: variables.$md) {
      flex-direction: row;
      .sidebar {
        flex: 0 0 16rem;
      }
    }
    @media (min-width: variables.$lg) {
      .sidebar {
        flex-basis: 18.5rem;
      }
    }
  }
</style>
