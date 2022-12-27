<script lang="ts">
  import type { PageNavigationTabViewModel } from './models';
  import NavigationTab from './PageNavigationTab.svelte';

  export let tabs: PageNavigationTabViewModel[];
  export let currentPageId: string | undefined = undefined;
</script>

<div class="navigation-tabs">
  {#each tabs as tab}
    <div class="tab" class:active={tab.pageId === currentPageId}>
      <NavigationTab {tab} />
    </div>
  {/each}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .navigation-tabs {
    display: flex;
    gap: 0.5em;
    .tab {
      position: relative;
      &.active {
        font-weight: 600;
        &:before {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: variables.$color-border-active;
        }
      }
    }
  }
</style>
