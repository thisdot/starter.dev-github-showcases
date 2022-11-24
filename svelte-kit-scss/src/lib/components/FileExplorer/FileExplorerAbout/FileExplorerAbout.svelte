<script lang="ts">
  import { Book16, Link16 } from 'svelte-octicons';
  import { handleAnchorClick } from '$lib/helpers';
  import type { RepoState } from '$lib/interfaces';

  export let repoInfo: RepoState;
  $: ({ description, website, tags } = repoInfo);
</script>

<div class="container border-bottom-2">
  <h2>About</h2>
  <div class="description mt-1">
    <span data-testid="repo file explorer description">
      {description ?? 'No description, website, or topics provided.'}
    </span>

    {#if website}
      <div class="linkContainer mt-1">
        <span class="icon">
          <Link16 />
        </span>
        <a href={website} class="link" target="_blank" rel="noreferrer">
          {website}
        </a>
      </div>
    {/if}

    {#if tags}
      <div class="mt-1">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>

  <div class="mt-1">
    <a class="readMeLink" href="#readme" on:click={handleAnchorClick}>
      <span class="icon">
        <Book16 />
      </span>
      Readme
    </a>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  a {
    color: variables.$gray500;
  }

  a > span,
  .link {
    margin-right: 0.5rem;
  }

  .mt-1 {
    margin-top: 1rem;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    margin-right: 0.375rem;
    background-color: variables.$blue100;
    transition-property: background-color, border-color, color, fill, stroke;
    color: variables.$blue600;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    border-radius: 0.75rem;
    cursor: pointer;

    &:hover {
      background-color: variables.$blue600;
      color: variables.$white;
    }
  }
  .border-bottom-2 {
    border-bottom: 2px solid rgba(209, 213, 219, 1);
    padding-bottom: 2rem;
  }
</style>
