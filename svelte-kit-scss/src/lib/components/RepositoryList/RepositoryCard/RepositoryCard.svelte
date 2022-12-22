<script lang="ts">
  import { relativeTimeFmt } from '$lib/helpers';
  import { Law16, Star16, RepoForked16 } from 'svelte-octicons';
  import { LANGUAGE_COLORS } from '$lib/constants/language-colors';
  import type { RepositoryCardViewModel } from '../view-models';
  import ProgrammingLanguage from '$lib/components/shared/ProgrammingLanguage/ProgrammingLanguage.svelte';

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
    topics,
  } = model);
</script>

<div class="repository-card">
  <div class="body">
    <div class="title">
      <h3>
        <a class="link" {href} data-testid="name">{name}</a>
        <span class="visibility" data-testid="visibility">{visibility}</span>
      </h3>
    </div>
    {#if description}
      <div class="description">
        <span data-testid="description">{description}</span>
      </div>
    {/if}
    <!-- {#if topics}
      <div class="topics">
        <span class="description" data-testid="description">{description}</span>
      </div>
    {/if} -->
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
      <div class="entry updated" data-testid="updated">
        <span>Updated <span>{relativeTimeFmt(updatedAt)}</span></span>
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
          .visibility {
            font-size: 0.75em;
            font-weight: 500;
            text-transform: capitalize;
            border: 1px solid variables.$gray300;
            line-height: 1.5em;
            padding: 0 0.5em;
            border-radius: 0.75em;
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
      }
    }
  }

  // .name-container {
  //   display: flex;
  //   margin: 0 0 0.5rem 0;

  //   .name {
  //     font-size: 1.25rem;
  //     line-height: 1.75em;
  //     font-weight: 600;
  //     color: rgba(37, 99, 235, 1);
  //   }

  //   .visibility {
  //     display: inline-block;
  //     padding: 0 7px;
  //     margin: 2px 2px 2px 8px;
  //     font-size: 0.9rem;
  //     font-weight: 500;
  //     line-height: 1.8em;
  //     color: rgba(75, 85, 99, 1);
  //     border: 1px solid rgba(209, 213, 219, 1);
  //     border-radius: 2em;
  //   }
  // }

  // .description {
  //   margin: 8px auto;
  // }

  // .subline {
  //   display: flex;
  //   gap: 16px;
  //   font-size: 0.85rem;
  //   line-height: 1.4em;
  //   color: rgba(75, 85, 99, 1);

  //   .language {
  //     display: flex;
  //     align-items: center;

  //     .language-color {
  //       display: inline-block;
  //       width: 12px;
  //       height: 12px;
  //       border-radius: 50%;
  //       margin-right: 8px;
  //     }
  //   }

  //   .stars {
  //     display: flex;
  //     align-items: center;
  //     line-height: 1.4em;

  //     .star-count {
  //       margin-left: 4px;
  //     }
  //   }

  //   .license {
  //     .license-name {
  //       margin-left: 6px;
  //     }
  //   }
  // }
</style>
