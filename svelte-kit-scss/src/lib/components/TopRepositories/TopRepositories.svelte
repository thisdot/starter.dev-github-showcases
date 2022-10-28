<script lang="ts">
  import type {UserReposState} from "../../interfaces";
  import RepositoryCard from "$lib/components/RepositoryCard/RepositoryCard.svelte";

  export let repos: UserReposState[]
  export let username: string
</script>

<div class="top-repositories-container" data-testid="top-repos">
  <h2>Top Repositories</h2>
  <div class="repo-container">

    {#each repos as repo, i}
      <div class="repo-section">
        <RepositoryCard repo={repo} username={username}/>
      </div>
      {#if i === (repos.length - 1)}
        <div class="view-all-link">
          {#if username}
            <a href="/{ username }"
               class:disabled="{!username}"
            >View all repositories</a
            >
          {/if}
        </div>
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">

  @use '../../styles/variables.scss';

  .top-repositories-container {
    padding: 1.5rem;
    @media (min-width: variables.$md) {
      padding: 3rem;
    }

    h2 {
      font-size: 18px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 16px;
    }

    .repo-container {
      background-color: variables.$white;
      border-radius: 0.5rem;
      border-width: 1px;
    }

    .repo-section {
      padding: 1rem;
      border-bottom: 1px solid variables.$gray300;
      @media (min-width: variables.$md) {
        padding: 2rem 0 2rem 2rem;
      }
    }

    .view-all-link {
      padding: 1.25rem;
      background-color: variables.$gray200;
      display: grid;
      place-items: center;

      a {
        color: inherit;
        font-weight: 600;

        &.disabled {
          color: variables.$gray300;
          cursor: not-allowed;
        }
      }
    }
  }

</style>
