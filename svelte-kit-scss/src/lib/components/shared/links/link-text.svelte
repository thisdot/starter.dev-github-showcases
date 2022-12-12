<script lang="ts">
  export let href: string | null | undefined;
  export let bold = true;

  $: style = `font-weight: ${bold ? 600 : 'inherit'}`;
</script>

{#if href}
  <a class="link-text" {href} {style}><slot /></a>
{:else}
  <span class="link-text-disabled" {style}><slot /></span>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .link-text {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: variables.$blue600;
    }
  }
</style>
