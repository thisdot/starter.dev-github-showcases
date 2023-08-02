<script lang="ts">
  export let text: string;
</script>

<button class="button-text">
  {#if $$slots.left}
    <span><slot name="left" /></span>
  {/if}

  <span>{text}</span>

  {#if $$slots.right}
    <span><slot name="right" /></span>
  {/if}
</button>

<style lang="scss">
  .button-text {
    border: none;
    outline: none;
    opacity: 0.7;
    padding: 0;
    background: transparent;
    font-weight: inherit;
    cursor: pointer;
    &:hover {
      opacity: unset;
    }
    & > span {
      vertical-align: middle;
    }
  }
</style>
