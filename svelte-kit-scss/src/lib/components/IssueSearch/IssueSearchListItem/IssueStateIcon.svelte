<script lang="ts">
  import { IssueState } from '$lib/interfaces';
  import { CheckCircle16, Circle16 } from 'svelte-octicons';

  export let state: IssueState;
</script>

{#if state === IssueState.Open}
  <Circle16 class="issue-state-icon open">
    <circle cx="50%" cy="50%" r="2" />
  </Circle16>
{:else if state === IssueState.Closed}
  <CheckCircle16 class="issue-state-icon closed" />
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
