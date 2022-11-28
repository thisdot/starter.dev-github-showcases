<script lang="ts">
  import { Comment16 } from 'svelte-octicons';

  export let count: number;
</script>

<div class="comments-count">
  <Comment16 class="icon" /><span class="count">{count}</span>
</div>

<style lang="scss">
  .comments-count {
    display: inline-block;
    :global(.icon) {
      height: 1em;
    }
    .count {
      font-size: 0.75em;
      line-height: 1;
      vertical-align: top;
    }
  }
</style>
