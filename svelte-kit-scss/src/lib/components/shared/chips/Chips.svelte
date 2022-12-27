<script lang="ts">
  import type { Chip } from './models';
  export let chips: Chip[];
  export let target: '_blank' | '_self' | '_parent' | '_top' = '_self';
</script>

<div class="chips">
  {#each chips as { label, href }}
    <div class="chip" class:link={href}>
      {#if href}
        <a {href} class="text" {target} rel="noreferrer">{label}</a>
      {:else}
        <span class="text">{label}</span>
      {/if}
    </div>
  {/each}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $currentColor: currentColor;
  .chips {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 0.25em;
    .chip {
      color: currentColor;
      position: relative;
      font-weight: 600;
      padding: 0 0.625em;
      .text {
        font-size: 0.75em;
        text-decoration: none;
        vertical-align: bottom;
        white-space: nowrap;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        opacity: 0.2;
        border-radius: 1em;
        z-index: -1;
      }
      &.link {
        &:hover {
          &:before {
            opacity: 1;
          }
          .text {
            color: variables.$white;
          }
        }
      }
    }
  }
</style>
