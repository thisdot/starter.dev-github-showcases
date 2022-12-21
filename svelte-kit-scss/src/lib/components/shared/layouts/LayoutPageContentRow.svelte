<div class="page-content-row">
  <slot />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .page-content-row {
    padding: 0 1rem;
    @media (min-width: variables.$md) {
      padding: 0 1.5rem;
    }
    @media (min-width: variables.$lg) {
      padding: 0 2rem;
    }
  }
</style>
