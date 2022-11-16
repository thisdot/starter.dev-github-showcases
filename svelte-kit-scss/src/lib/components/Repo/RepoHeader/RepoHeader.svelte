<script lang="ts">
  import type { RepoState } from '$lib/interfaces';
  import RepoHeading from './RepoHeading/RepoHeading.svelte';
  import RepoInfo from './RepoInfo/RepoInfo.svelte';
  import RepoNavigation from './RepoNavigation/RepoNavigation.svelte';

  export let repo: RepoState;
  $: ({ watchCount, starCount, forkCount, openIssuesCount, openPullRequestsCount } = repo);
</script>

<div class="wrapper">
  {#if repo}
    <div class="top">
      <RepoHeading {repo} />
      <RepoInfo {watchCount} {starCount} {forkCount} />
    </div>
    <RepoNavigation {repo} issueCount={openIssuesCount} prCount={openPullRequestsCount} />
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
