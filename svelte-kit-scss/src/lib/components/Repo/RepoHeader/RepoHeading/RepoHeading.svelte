<script lang="ts">
  import type { RepoState } from '$lib/interfaces';
  import { titleCase } from '$lib/helpers/formatting';
  import { Repo24 } from 'svelte-octicons';

  export let repo: RepoState;

  const ownerPath = () => {
    return `/${repo?.ownerName}`;
  };

  const repoPath = () => {
    return `/${repo?.ownerName}/${repo?.repoName}`;
  };

  const visibility = () => {
    return repo?.visibility || '';
  };
</script>

<div class="heading">
  <Repo24 class="icon" />
  <div class="heading__breadcrumb">
    <a href={ownerPath()}>{repo?.ownerName}</a>
    <span>/</span>
    <a href={repoPath()} class="bold">{repo?.repoName}</a>
  </div>
  {#if repo?.visibility}
    <div class="heading__privacy">
      <span>{titleCase(visibility())}</span>
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .heading {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &__breadcrumb {
      margin-bottom: 0.25rem;
      display: flex;
      gap: 0.5rem;
      align-items: center;

      a {
        font-size: 1.475rem;
        color: variables.$blue600;
        text-decoration: none;
      }

      span {
        color: variables.$gray600;
        font-size: 1.475rem;
      }
    }

    &__privacy {
      border-radius: 1rem;
      color: variables.$gray600;
      line-height: 1rem;
      font-weight: 500;
      border: 1px solid variables.$gray300;
      padding: 0.2rem 0.7rem;
      font-size: 0.875rem;
    }
  }
</style>
