<script lang="ts">
  import type { Breadcrumb } from './models';

  export let breadcrumbs: Breadcrumb[];
</script>

<div class="breadcrumbs">
  {#each breadcrumbs as { name, href, emphasis }, index}
    {#if name}
      {#if !href}
        <span class="breadcrumb" class:emphasis data-testid={`breadcrumb ${name}`}>{name}</span>
      {:else}
        <a class="breadcrumb link" class:emphasis {href} data-testid={`breadcrumb ${name}`}>
          {name}
        </a>
      {/if}
    {/if}
    {#if !(index + 1 === breadcrumbs.length)}
      <span>/</span>
    {/if}
  {/each}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25em;
    .breadcrumb {
      &.link {
        color: variables.$blue600;
      }
      &.emphasis {
        font-weight: 600;
      }
    }
  }
</style>
