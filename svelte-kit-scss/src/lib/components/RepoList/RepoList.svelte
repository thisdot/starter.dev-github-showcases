<script lang="ts">
  import type { UserReposState } from "../../interfaces";
  import RepositoryCard from "../RepositoryCard/RepositoryCard.svelte";

  export let repos: UserReposState[];
  export let username: string;
</script>

<ul>
    {#each repos as repo}
        <li>
            <RepositoryCard {repo} {username} />
        </li>
    {/each}
</ul>

<style lang="scss">
    ul {
      list-style: none;

    li {
      padding: 32px 0;
      border-bottom: 1px solid rgba(229, 231, 235, 1);
    }
}
</style>