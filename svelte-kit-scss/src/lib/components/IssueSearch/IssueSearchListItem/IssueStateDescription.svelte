<script lang="ts">
  import LinkText from '$lib/components/shared/links/link-text.svelte';
  import { relativeTimeFmt } from '$lib/helpers';
  import type { Issue } from '$lib/interfaces';

  export let item: Issue;
  $: open = item?.state === 'open';
  $: login = item?.user?.login;
  $: href = item?.user?.href;
</script>

<span>
  {#if open}
    <span data-testid="issue-number">#{item.number}</span> opened by
    {#if login}
      <LinkText {href} testId="issue-user-login">{login}</LinkText>
    {/if}
    <span data-testid="issue-date">{relativeTimeFmt(item.createdAt)}</span>
  {:else if item.closedAt}
    <span data-testid="issue-number">#{item.number}</span> by
    {#if login}
      <LinkText {href} testId="issue-user-login">{login}</LinkText>
    {/if}
    was closed <span data-testid="issue-date">{relativeTimeFmt(item.closedAt)}</span>
  {:else}
    #{item.number} -
  {/if}
</span>

<style lang="scss">
</style>
