<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let href: string | undefined = undefined;
  export let label: string | null | undefined = undefined;
  export let iconComponent: ComponentType;
  export let mobileHide = false;
</script>

<div class="social-link" class:mobile-hide={mobileHide}>
  <div class="container">
    <div class="entry icon">
      <svelte:component this={iconComponent} />
    </div>
    <div class="entry label">
      {#if href}
        <a class="link" {href}>{label || href}</a>
      {:else}
        <span>{label || ''}</span>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .social-link {
    &.mobile-hide {
      display: none;

      @media (min-width: variables.$md) {
        display: unset;
      }
    }
    .container {
      display: flex;
      align-items: center;
      gap: 0.25em;
      margin: 0;
      max-width: 100%;
      .entry {
        display: flex;
        align-items: center;
        &.icon {
          color: variables.$gray700;
        }
        &.label {
          min-width: 0;
          .link {
            color: inherit;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover {
              color: variables.$blue600;
            }
          }
        }
      }
    }
  }
</style>
