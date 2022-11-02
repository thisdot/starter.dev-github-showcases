<script lang="ts">
  import type { UserReposState } from '$lib/interfaces';
  import { relativeTimeFmt } from '$lib/helpers';
  import { Law16, Star16, RepoForked16 } from 'svelte-octicons';
  import { LANGUAGE_COLORS } from '$lib/constants/language-colors';

  export let repo: UserReposState;

  const href = repo ? `/${repo.owner.login}/${repo.name}` : '#';

  function visibility(): string {
    if (repo) {
      return repo?.private ? 'Private' : 'Public';
    } else {
      return '';
    }
  }

  function getLanguageColor(): string {
    return LANGUAGE_COLORS[String(repo?.language)];
  }
</script>

<h3 class="name-container" data-testid="repo-card">
  <a class="name" {href}>{repo.name}</a>
  <span class="visibility">{visibility()}</span>
</h3>
{#if repo.description}
  <p class="description">{repo.description}</p>
{/if}
<div class="subline">
  {#if repo.language}
    <div class="language">
      <div class="language-color" style="background-color: {getLanguageColor()}" />
      <div class="language-label">{repo.language}</div>
    </div>
  {/if}

  {#if repo.stargazers_count}
    <div class="stars">
      <Star16 />
      <span class="star-count">{repo.stargazers_count}</span>
    </div>
  {/if}
  {#if repo.forks_count}
    <div class="stars">
      <RepoForked16 />
      <span class="star-count">{repo.forks_count}</span>
    </div>
  {/if}
  {#if repo.license}
    <div class="license">
      <Law16 />
      <span class="license-name">{repo.license.name}</span>
    </div>
  {/if}
  <div class="updated">{relativeTimeFmt(repo.updated_at)}</div>
</div>

<style lang="scss">
  @use '../../styles/variables.scss';

  .name-container {
    display: flex;
    margin: 0 0 0.5rem 0;

    .name {
      font-size: 1.25rem;
      line-height: 1.75em;
      font-weight: 600;
      color: rgba(37, 99, 235, 1);
    }

    .visibility {
      display: inline-block;
      padding: 0 7px;
      margin: 2px 2px 2px 8px;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.8em;
      color: rgba(75, 85, 99, 1);
      border: 1px solid rgba(209, 213, 219, 1);
      border-radius: 2em;
    }
  }

  .description {
    margin: 8px auto;
  }

  .subline {
    display: flex;
    gap: 16px;
    font-size: 0.85rem;
    line-height: 1.4em;
    color: rgba(75, 85, 99, 1);

    .language {
      display: flex;
      align-items: center;

      .language-color {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }

    .stars {
      display: flex;
      align-items: center;
      line-height: 1.4em;

      .star-count {
        margin-left: 4px;
      }
    }

    .license {
      .license-name {
        margin-left: 6px;
      }
    }
  }
</style>
