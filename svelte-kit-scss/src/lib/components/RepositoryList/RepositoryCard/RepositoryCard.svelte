<script lang="ts">
  import { relativeTimeFmt } from '$lib/helpers';
  import { Law16, Star16, RepoForked16 } from 'svelte-octicons';
  import type { RepositoryCardViewModel } from '../view-models';
  import ProgrammingLanguage from '$lib/components/shared/ProgrammingLanguage/ProgrammingLanguage.svelte';
  import VisibilityLabel from '$lib/components/Repository/VisibilityLabel/VisibilityLabel.svelte';

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
</script>

<div class="repository-card">
  <div class="body">
    <div class="title">
      <h3>
        <a class="link" {href} data-testid="name">{name}</a>
        <VisibilityLabel {visibility} />
      </h3>
    </div>
    {#if description}
      <div class="description">
        <span data-testid="description">{description}</span>
      </div>
    {/if}
  </div>
  <div class="footer">
    {#if language}
      <div class="entry language">
        <ProgrammingLanguage name={language} />
      </div>
    {/if}
    <div class="entry stars">
      <Star16 />
      <span class="count" data-testid="stargazersCount">{stargazersCount}</span>
    </div>
    <div class="entry forks">
      <RepoForked16 />
      <span class="count" data-testid="forksCount">{forksCount}</span>
    </div>
    {#if license}
      <div class="entry license">
        <Law16 />
        <span class="license-name" data-testid="license_name">{license.name}</span>
      </div>
    {/if}
    {#if updatedAt}
      <div class="entry updated">
        <span>Updated <span data-testid="updated">{relativeTimeFmt(updatedAt)}</span></span>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .repository-card {
    display: flex;
    flex-direction: column;
    gap: 1em;
    .body {
      overflow-wrap: break-word;
      .title {
        h3 {
          font-size: 1em;
          margin: 0;
          .link {
            font-weight: 600;
            color: variables.$blue600;
          }
        }
      }
      .description {
        font-size: 0.875em;
      }
    }
    .footer {
      font-size: 0.75em;
      display: flex;
      flex-wrap: wrap;
      gap: 1em;
      .entry {
        display: flex;
        align-items: center;
        gap: 0.25em;
        color: variables.$gray600;
      }
    }
  }
</style>
