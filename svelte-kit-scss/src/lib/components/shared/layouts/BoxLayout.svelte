<div class="box-layout">
  <div class="border-area">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
  <div class="footer">
    <slot name="footer" />
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  $border: 1px solid variables.$gray300;

  .box-layout {
    .border-area {
      border: $border;
      border-radius: 6px;
      .header {
        border-bottom: $border;
        padding: 1em;
        background: variables.$gray100;
      }
    }
  }
</style>
