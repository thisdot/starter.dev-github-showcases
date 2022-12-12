<script lang="ts">
  import { relativeTimeFmt } from '$lib/helpers';
  import { Law16, Star16, RepoForked16 } from 'svelte-octicons';
  import { LANGUAGE_COLORS } from '$lib/constants/language-colors';
  import type { RepositoryCardViewModel } from '../view-models';

  export let model: RepositoryCardViewModel;

  $: ({
    name,
    visibility,
    language,
    description,
    stargazersCount,
    forksCount,
    updatedAt,
    license,
    routeHref: href,
  } = model);

  function getLanguageColor(language: string | null | undefined): string {
    return LANGUAGE_COLORS[String(language)];
  }
</script>

<h3 class="name-container" data-testid="repo-card">
  <a class="name" {href} data-testid="name">{name}</a>
  <span class="visibility" data-testid="visibility">{visibility}</span>
</h3>
{#if description}
  <p class="description" data-testid="description">{description}</p>
{/if}
<div class="subline">
  {#if language}
    <div class="language">
      <div class="language-color" style="background-color: {getLanguageColor(language)}" />
      <div class="language-label" data-testid="language">{language}</div>
    </div>
  {/if}
  <div class="stars">
    <Star16 />
    <span class="star-count" data-testid="stargazersCount">{stargazersCount}</span>
  </div>
  <div class="stars">
    <RepoForked16 />
    <span class="star-count" data-testid="forksCount">{forksCount}</span>
  </div>
  {#if license}
    <div class="license">
      <Law16 />
      <span class="license-name" data-testid="license_name">{license.name}</span>
    </div>
  {/if}
  {#if updatedAt}
    <div class="updated" data-testid="updated">{relativeTimeFmt(updatedAt)}</div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

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
