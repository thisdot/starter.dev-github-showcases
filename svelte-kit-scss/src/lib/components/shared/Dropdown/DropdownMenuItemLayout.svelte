<div class="dropdown-menu-item-layout">
  <slot />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .dropdown-menu-item-layout {
    border-bottom: 1px solid variables.$gray300;
    padding: 0.75em 1.25em;
    cursor: pointer;
    &:hover {
      background: variables.$gray100;
    }
    &:last-child {
      border-bottom: none;
    }
  }
</style>
