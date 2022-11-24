<script lang="ts">
  import { relativeTimeFmt } from '$lib/helpers';
  import type { Issue } from '$lib/interfaces';

  export let item: Issue;
  $: open = item?.state === 'open';
</script>

<span>
  {#if open}
    #{item.number} opened by <a class="link-anchor" href="#">{item.user.login}</a>
    {relativeTimeFmt(item.createdAt)}
  {:else if item.closedAt}
    #{item.number} by <a class="link-anchor" href="#">{item.user.login}</a> was closed {relativeTimeFmt(
      item.closedAt
    )}
  {:else}
    #{item.number} -
  {/if}
</span>

<style lang="scss">
</style>
