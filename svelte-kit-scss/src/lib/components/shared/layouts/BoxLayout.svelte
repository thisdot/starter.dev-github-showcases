<div class="box-layout">
  <div class="border-area">
    {#if $$slots.header}
      <div class="header">
        <slot name="header" />
      </div>
    {/if}
    <div class="body">
      <slot />
    </div>
    {#if $$slots.footer}
      <div class="footer">
        <slot name="footer" />
      </div>
    {/if}
  </div>
  {#if $$slots.bottom}
    <div class="bottom">
      <slot name="bottom" />
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  $border: 1px solid variables.$gray300;
  .box-layout {
    .border-area {
      border: $border;
      border-radius: 6px;
      overflow: hidden;
      background-color: variables.$white;
      .header,
      .footer {
        padding: 1em;
        background: variables.$gray100;
        overflow: hidden;
      }
      .header {
        border-bottom: $border;
      }
      .footer {
        border-top: $border;
      }
    }
  }
</style>
