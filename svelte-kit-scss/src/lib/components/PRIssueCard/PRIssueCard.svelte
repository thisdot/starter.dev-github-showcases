<script lang="ts">
  import type { RepoIssue } from '$lib/interfaces';
  import { relativeTimeFmt } from '$lib/helpers/index.js';
  import { CheckCircle16, Comment16, NoEntry16 } from 'svelte-octicons';

  export let issue: RepoIssue;

  function isOpen(): boolean {
    return issue?.state === 'open';
  }

  function colorMap(color: string): string {
    switch (color) {
      case 'D4C5F9': // violet
        return '#ddd6fe';
      case '310D85': // dark purple
        return '#c084fc';
      case '6ED842': // bright yellow green
        return '#bef264';
      case 'ED1DB5': // hot pink
        return '#f9a8d4';
      default:
        return `#${color}`;
    }
  }
</script>

{#if issue}
  <div class="item">
    <div class="item-container">
      <div class="info">
        {#if isOpen()}
          <span class="icon {issue.state}">
            <NoEntry16 />
          </span>
        {:else}
          <span class="icon {issue.state}">
            <CheckCircle16 />
          </span>
        {/if}
        <div>
          <div class="content">
            <span class="title">{issue.title}</span>
            {#each issue.labels as label}
              <span class="inline">
                <span style="background-color: {colorMap(label.color)}" class="label">
                  {label.name}
                </span>
              </span>
            {/each}
          </div>
          <div class="meta">
            #{issue.number}
            {#if isOpen() && issue?.createdAt}
              <span>
                opened
                {relativeTimeFmt(issue.createdAt)}
              </span>
            {/if}
            by
            <span class="created-by">{issue.login}</span>
            {#if !isOpen() && issue?.closedAt}
              <span>
                was closed
                {relativeTimeFmt(issue.closedAt)}
              </span>
            {/if}
          </div>
        </div>
      </div>
      <div class="comments">
        <Comment16 />
        <div class="comment-count">
          {issue.commentCount}
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  $color-open: variables.$green100;
  $color-closed: variables.$purple100;

  .item {
    padding: 1.125rem;
    border-bottom: 1px solid variables.$gray200;

    &:hover {
      background-color: variables.$gray100;
    }
  }

  .item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      display: flex;
    }
  }

  .icon {
    margin-right: 0.5rem;

    &.open {
      color: $color-open;
    }

    &.closed {
      color: $color-closed;
    }
  }

  .content {
    .title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-right: 0.25rem;

      &:hover {
        color: variables.$blue300;
      }
    }

    .label {
      font-weight: 500;
      font-size: 0.875rem;
      margin: 0 0.385rem;
      padding: 0.125rem 0.5rem;
      cursor: pointer;
      border-radius: 0.875rem;
    }
  }

  .meta {
    line-height: 0.875rem;
    font-size: 0.875rem;
    margin-top: 0.325rem;
    color: variables.$gray600;

    .created-by {
      cursor: pointer;

      &:hover {
        color: variables.$blue300;
      }
    }
  }

  .comments {
    text-align: center;
    position: relative;

    .comment-count {
      text-align: center;
    }
  }
</style>
