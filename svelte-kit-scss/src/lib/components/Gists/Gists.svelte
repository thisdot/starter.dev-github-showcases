<script lang="ts">
  import type { UserGistsState } from '$lib/interfaces';

  export let gists: UserGistsState[];
</script>

<div class="container">
  <h3>Gists</h3>
  {#if gists.length > 0}
    <ul>
      {#each gists as gist}
        <li>
          <a class="link" href={gist.url} target="_blank" rel="noreferrer">
            {gist.fileName}
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <p>User does not have any gists</p>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables';

  .container {
    padding: 2rem 0;
    border-top: 1px solid variables.$gray300;
    border-bottom: 1px solid variables.$gray300;
    ul {
      list-style: none;
      padding: 0;
    }
    h3 {
      font-weight: 600;
    }
    a.link {
      color: variables.$black;
      &:hover {
        color: variables.$blue300;
      }
    }
  }
</style>
