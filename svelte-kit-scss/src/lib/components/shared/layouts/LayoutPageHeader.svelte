<div class="layout-page-header">
  <slot />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .layout-page-header {
    border-bottom: 1px solid variables.$gray300;
    overflow-x: hidden;
    margin-bottom: 1rem;
  }
</style>
