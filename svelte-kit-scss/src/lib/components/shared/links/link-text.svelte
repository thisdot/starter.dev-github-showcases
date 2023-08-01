<script lang="ts">
  export let href: string | null | undefined;
  export let bold = true;
  export let testId: string | undefined = undefined;

  $: style = `font-weight: ${bold ? 600 : 'inherit'}`;
</script>

{#if href}
  <a class="link-text" {href} {style} data-testid={testId}><slot /></a>
{:else}
  <span class="link-text-disabled" {style} data-testid={testId}><slot /></span>
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
