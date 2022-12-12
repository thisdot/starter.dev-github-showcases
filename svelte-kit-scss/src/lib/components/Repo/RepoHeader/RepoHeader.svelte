<script lang="ts">
  import type { RepositoryState } from '$lib/interfaces';
  import RepoHeading from './RepoHeading/RepoHeading.svelte';
  import RepoInfo from './RepoInfo/RepoInfo.svelte';
  import RepoNavigation from './RepoNavigation/RepoNavigation.svelte';

  export let repositoryState: RepositoryState;
  $: ({ watchersCount, stargazersCount, forksCount, openIssuesCount, openPullRequestsCount } =
    repositoryState);
</script>

<div class="wrapper">
  {#if repositoryState}
    <div class="top">
      <RepoHeading repo={repositoryState} />
      <RepoInfo watchCount={watchersCount} starCount={stargazersCount} forkCount={forksCount} />
    </div>
    <RepoNavigation
      repo={repositoryState}
      issueCount={openIssuesCount}
      prCount={openPullRequestsCount}
    />
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .wrapper {
    padding: 1.5rem 3rem 0;
    background-color: variables.$gray100;
    border-bottom: 1px solid variables.$gray300;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
  }
</style>
