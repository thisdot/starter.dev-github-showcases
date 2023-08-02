<script lang="ts">
  import BoxLayout from '$lib/components/shared/layouts/BoxLayout.svelte';
  import LinkText from '$lib/components/shared/links/link-text.svelte';
  import RepositoryList from '../RepositoryList/RepositoryList.svelte';
  import type { TopRepositoriesListViewModel } from '../view-models';

  export let model: TopRepositoriesListViewModel;

  $: ({ repositories: items, viewAllRouteHref } = model);
  $: hasRepos = Boolean(items.length);
</script>

<BoxLayout>
  <RepositoryList {items} />
  <svelte:fragment slot="footer">
    {#if hasRepos}
      <div class="view-all" class:no-link={!viewAllRouteHref}>
        <LinkText href={viewAllRouteHref}>View all repositories</LinkText>
      </div>
    {:else}
      <div class="empty">
        <span>No repositories</span>
      </div>
    {/if}
  </svelte:fragment>
</BoxLayout>

<style lang="scss">
  .view-all {
    text-align: center;
    &.no-link {
      opacity: 0.5;
    }
  }
  .empty {
    opacity: 0.5;
  }
</style>
