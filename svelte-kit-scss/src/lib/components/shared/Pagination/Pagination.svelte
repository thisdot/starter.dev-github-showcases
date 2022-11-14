<script lang="ts">
</script>

<div class="paginator-container">
  <span class="group">
    <button type="button" class="button disabled">Previous</button>
    <button type="button" class="button">Next</button>
  </span>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .paginator-container {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .group {
      position: relative;
      display: inline-flex;
      z-index: 0;
    }

    .button {
      cursor: pointer;
      display: inline-flex;
      position: relative;
      padding: 0.25rem 1rem;
      background-color: variables.$gray100;
      transition-property: background-color, border-color, color, fill, stroke;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      color: variables.$blue300;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 600;
      border: 1px solid variables.$gray200;

      &:first-child {
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        border-right: 0;
      }
      &:last-child {
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
      }
      &.disabled {
        color: variables.$blue200;
      }
      &.disabled:hover {
        background-color: variables.$gray100;
      }
    }
  }
</style>
