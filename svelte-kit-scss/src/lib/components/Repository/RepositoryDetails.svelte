<script lang="ts">
  import { Book16, Eye16, RepoForked16, Star16 } from 'svelte-octicons';
  import type { RepositoryState } from '$lib/interfaces';
  import Chips from '$lib/components/shared/chips/Chips.svelte';

  export let repositoryState: RepositoryState;
  $: ({ description, topics, stargazersCount, watchersCount, forksCount } = repositoryState);
  const readmeHref = '#readme';
  $: chips = topics.map((topic) => ({
    label: topic.name,
    href: topic.url,
  }));
</script>

<div class="repository-details">
  <div class="detail about">
    <h2 class="heading">About</h2>
    <div class="description">
      {#if description}
        <span class="text" data-testid="description">{description}</span>
      {:else}
        <span class="text empty">No description, website, or topics provided.</span>
      {/if}
    </div>
    <div class="topics">
      <Chips {chips} target="_blank" />
    </div>
    <div class="references">
      {#if readmeHref}
        <a href={readmeHref} class="reference readme link">
          <Book16 />
          <span>Readme</span>
        </a>
      {/if}
      <span class="reference stargazersCount">
        <Star16 />
        <span
          ><span class="count" data-testid="stargazers-count">{stargazersCount}</span> stars</span
        >
      </span>
      <span class="reference watchersCount">
        <Eye16 />
        <span><span class="count" data-testid="watchers-count">{watchersCount}</span> watching</span
        >
      </span>
      <span class="reference forksCount">
        <RepoForked16 />
        <span><span class="count" data-testid="forks-count">{forksCount}</span> forks</span>
      </span>
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .repository-details {
    width: 100%;

    .detail {
      .heading {
        font-size: 1em;
        font-weight: 600;
        color: variables.$gray800;
      }
      &.about {
        .description {
          font-size: 1em;
          color: variables.$gray800;
          margin: 1em 0;
          .text {
            &.empty {
              font-style: italic;
            }
          }
        }
        .topics {
          color: variables.$blue600;
          margin: 1em 0;
        }
        .references {
          margin: 0.25em 0 0 0;
          font-size: 0.875em;
          color: variables.$gray600;
          display: flex;
          flex-direction: column;
          gap: 0.25em;
          .reference {
            display: flex;
            align-items: center;
            gap: 0.5em;
            &.link {
              color: variables.$gray600;
              text-decoration: none;
              &:hover {
                color: variables.$blue600;
              }
            }
          }
        }
      }
    }
  }
</style>
