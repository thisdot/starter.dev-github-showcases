<script lang="ts">
  import type { Chip } from './models';
  export let chips: Chip[];
  export let target: '_blank' | '_self' | '_parent' | '_top' = '_self';
</script>

<div class="chips noselect">
  {#each chips as { label, href }}
    {#if href}
      <a class="chip link" {href} {target} rel="noreferrer">
        <span class="text">{label}</span>
      </a>
    {:else}
      <div class="chip">
        <span class="text">{label}</span>
      </div>
    {/if}
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
        vertical-align: bottom;
        white-space: nowrap;
        color: inherit;
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
        text-decoration: none;
        border-radius: 1em;
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
