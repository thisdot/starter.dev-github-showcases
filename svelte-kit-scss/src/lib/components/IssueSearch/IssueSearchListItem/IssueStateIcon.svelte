<script lang="ts">
  import { IssueState } from '$lib/interfaces';
  import { GitMerge16, GitPullRequest16, IssueClosed16, IssueOpened16 } from 'svelte-octicons';

  export let state: IssueState;
  export let pull = false;

  $: openIcon = pull ? GitPullRequest16 : IssueOpened16;
  $: closedIcon = pull ? GitMerge16 : IssueClosed16;
</script>

{#if state === IssueState.Open}
  <svelte:component this={openIcon} class="issue-state-icon open" />
{:else if state === IssueState.Closed}
  <svelte:component this={closedIcon} class="issue-state-icon closed" />
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  :global(.issue-state-icon.open) {
    color: variables.$green100;
  }

  :global(.issue-state-icon.closed) {
    color: variables.$purple100;
  }
</style>
