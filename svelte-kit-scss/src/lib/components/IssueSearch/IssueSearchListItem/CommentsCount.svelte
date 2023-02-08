<script lang="ts">
  import { Comment16 } from 'svelte-octicons';

  export let count: number;
</script>

<div class="comments-count">
  <Comment16 class="icon" /><span class="count" data-testid="issue-comments-count">{count}</span>
</div>

<style lang="scss">
  .comments-count {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 0.125em;
    :global(.icon) {
      height: 1em;
    }
    .count {
      font-size: 0.75em;
      font-weight: 600;
      line-height: 1;
      vertical-align: top;
    }
  }
</style>
