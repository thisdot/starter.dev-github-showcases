<script lang="ts">
  import type { Issue } from '$lib/interfaces';
  import IssueStateIcon from './IssueStateIcon.svelte';
  import IssueStateDescription from './IssueStateDescription.svelte';
  import CommentsCount from './CommentsCount.svelte';
  import IssueSearchAssignees from './IssueSearchAssignees.svelte';
  import IssueLabel from './IssueLabel.svelte';

  export let item: Issue;

  $: ({ title, commentsCount, state, assignees, labels, htmlUrl, pullRequest } = item);
  $: pull = Boolean(pullRequest);
</script>

<div class="issue-search-list-item" data-testid="issue-search-list-item">
  <div class="state">
    <IssueStateIcon {state} {pull} />
  </div>
  <div class="main">
    <div class="title">
      <a
        href={htmlUrl}
        target="_blank"
        rel="noreferrer"
        class="link-anchor"
        data-testid="issue-title"
      >
        {title}
      </a>
      {#each labels as label (label.name)}
        <IssueLabel {label} />
      {/each}
    </div>
    <div class="state-description">
      <IssueStateDescription {item} />
    </div>
  </div>
  <!-- todo: hide for mobile -->
  <div class="details">
    <div class="detail linked-issue" />
    <div class="detail assignees">
      <IssueSearchAssignees {assignees} />
    </div>
    <div class="detail comments">
      <a href="#" class="link-anchor">
        <CommentsCount count={commentsCount} />
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .issue-search-list-item {
    padding: 0.5rem 0.75rem;
    display: flex;
    font-size: 1rem;
    & > div {
      padding: 0 0.25rem;
    }
    .main {
      flex: 1;
      color: variables.$gray800;
      .title {
        font-weight: 600;
      }
      .state-description {
        font-size: 0.75em;
        color: variables.$gray600;
      }
    }

    .details {
      display: none;
      @media (min-width: variables.$md) {
        display: flex;
      }
      flex: 0 0 25%;
      .detail {
        flex: 1;
        text-align: right;
        line-height: normal;
      }
    }
  }
</style>
