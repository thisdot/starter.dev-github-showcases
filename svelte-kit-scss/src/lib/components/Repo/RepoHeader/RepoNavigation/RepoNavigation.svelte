<script lang="ts">
  import { goto } from '$app/navigation';
  import type { RepositoryState } from '$lib/interfaces';
  import { Code16, GitPullRequest16, IssueOpened16 } from 'svelte-octicons';
  import { page } from '$app/stores';
  import { IssueSearchPageTypeFiltersMap } from '$lib/constants/matchers';

  const DEFAULT_TAB = '';
  type DefaultTab = typeof DEFAULT_TAB;
  type SearchIssuePagePath = keyof typeof IssueSearchPageTypeFiltersMap;
  const issueSearchPageTypeIssue = Object.keys(
    IssueSearchPageTypeFiltersMap
  )[0] as SearchIssuePagePath;
  const issueSearchPageTypeRequest = Object.keys(
    IssueSearchPageTypeFiltersMap
  )[1] as SearchIssuePagePath;

  export let repo: RepositoryState,
    issueCount = 0,
    prCount = 0;

  $: path = $page.url.pathname;
  $: ({ name, owner: login } = repo);

  function openCode() {
    openRepoTab(DEFAULT_TAB);
  }

  function openIssues() {
    openRepoTab(issueSearchPageTypeIssue);
  }

  function openPRs() {
    openRepoTab(issueSearchPageTypeRequest);
  }

  function openRepoTab(path: SearchIssuePagePath | DefaultTab) {
    goto(`/${login}/${name}/${path}`);
  }
</script>

<div class="container">
  <nav class="nav" aria-label="Tabs">
    <ul>
      <li
        on:click={openCode}
        on:keypress={openCode}
        class="tab tab--inactive"
        class:tab--active={!path.includes(issueSearchPageTypeIssue) &&
          !path.includes(issueSearchPageTypeRequest)}
      >
        <span class="icon">
          <Code16 />
        </span>
        <span>Code</span>
      </li>
      <li
        on:click={openIssues}
        on:keypress={openIssues}
        class="tab tab--inactive"
        class:tab--active={path.includes(issueSearchPageTypeIssue)}
      >
        <span class="icon">
          <IssueOpened16 />
        </span>
        <span>Issues</span>
        <span class="count">
          {issueCount}
        </span>
      </li>
      <li
        on:click={openPRs}
        on:keypress={openPRs}
        class="tab tab--inactive"
        class:tab--active={path.includes(issueSearchPageTypeRequest)}
      >
        <span class="icon">
          <GitPullRequest16 />
        </span>
        <span>Pull Requests</span>
        <span class="count">
          {prCount}
        </span>
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .container {
    max-width: variables.$lg;
    margin: 0 auto 0 0;
    nav {
      display: flex;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-size: 1rem;
          padding: 16px;
          color: variables.$gray600;
          &.tab {
            &--active {
              border-bottom: 2px solid #f59e0b;

              span {
                font-weight: 600;
                color: black;
              }

              .icon {
                color: variables.$gray600;
              }
            }
          }
          &:hover {
            border-bottom: 2px solid variables.$gray300;
          }
          .count {
            display: inline-block;
            text-align: center;
            padding: 0 0.5rem;
            margin-left: 0.5rem;
            background-color: #e5e7eb;
            color: #1f2937;
            font-size: 0.875rem;
            line-height: 1.125rem;
            font-weight: 500;
            border-radius: 0.875rem;
          }
        }

        span {
          line-height: 1.175rem;
        }

        li {
          font-weight: 500;
        }
      }

      .icon {
        display: inline-flex;
        margin-right: 0.5rem;
      }
    }
  }
</style>
