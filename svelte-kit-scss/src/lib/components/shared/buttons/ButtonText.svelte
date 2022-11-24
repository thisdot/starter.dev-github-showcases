<script lang="ts">
  export let text = String();
</script>

<button class="button-text">
  {#if $$slots.left}
    <span><slot name="left" /></span>
  {/if}

  {#if text}
    <span>{text}</span>
  {:else if $$slots.default}
    <span><slot /></span>
  {/if}

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
    &:hover {
      opacity: unset;
    }
    & > span {
      vertical-align: middle;
    }
  }
</style>
