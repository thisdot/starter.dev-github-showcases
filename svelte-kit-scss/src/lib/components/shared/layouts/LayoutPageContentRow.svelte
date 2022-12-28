<script lang="ts">
  export let marginBottom: boolean | undefined = undefined;
</script>

<div class="page-content-row" class:margin-bottom={marginBottom}>
  <slot />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .page-content-row {
    padding: 0 1rem;
    &.margin-bottom {
      margin-bottom: 1rem;
    }
    @media (min-width: variables.$md) {
      padding: 0 1.5rem;
    }
    @media (min-width: variables.$lg) {
      padding: 0 2rem;
    }
  }
</style>
