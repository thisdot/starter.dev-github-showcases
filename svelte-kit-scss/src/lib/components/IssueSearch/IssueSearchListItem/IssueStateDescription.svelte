<script lang="ts">
  import { relativeTimeFmt } from '$lib/helpers';
  import type { Issue } from '$lib/interfaces';

  export let item: Issue;
  $: open = item?.state === 'open';
</script>

<span>
  {#if open}
    <span data-testid="issue-number">#{item.number}</span> opened by
    <a class="link-anchor" href="#" data-testid="issue-user-login">{item.user.login}</a>
    <span data-testid="issue-date">{relativeTimeFmt(item.createdAt)}</span>
  {:else if item.closedAt}
    <span data-testid="issue-number">#{item.number}</span> by
    <a class="link-anchor" href="#" data-testid="issue-user-login">{item.user.login}</a>
    was closed <span data-testid="issue-date">{relativeTimeFmt(item.closedAt)}</span>
  {:else}
    #{item.number} -
  {/if}
</span>

<style lang="scss">
</style>
