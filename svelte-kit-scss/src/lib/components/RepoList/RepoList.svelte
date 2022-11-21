<script lang="ts">
  import type { UserReposState } from '$lib/interfaces';
  import RepositoryCard from '../RepositoryCard/RepositoryCard.svelte';

  export let repos: UserReposState[];
</script>

<ul>
  {#if Array.isArray(repos)}
    {#each repos as repo}
      <li>
        <RepositoryCard {repo} />
      </li>
    {/each}
  {/if}
</ul>

<style lang="scss">
  ul {
    list-style: none;

    li {
      padding: 32px 0;
      border-bottom: 1px solid #e5e7eb;
    }
  }
</style>
