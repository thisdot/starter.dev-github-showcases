<script lang="ts">
  import BoxLayout from '$lib/components/shared/layouts/BoxLayout.svelte';
  import BlankSlate from '../RepositoryList/BlankSlate.svelte';
  import RepositoryList from '../RepositoryList/RepositoryList.svelte';
  import RepositoryListControls from '../RepositoryListFilters/RepositoryListControls.svelte';
  import type { AllRepositoriesListViewModel } from '../view-models';

  export let model: AllRepositoriesListViewModel;
  $: ({ repositories: items, controls } = model);
  $: hasSelectedFilters = controls.resetFiltersHref;
  $: hasItemsToShow = Boolean(items.length);
</script>

<BoxLayout>
  <RepositoryListControls slot="top" {controls} />
  {#if hasItemsToShow}
    <RepositoryList {items} />
    <!-- todo: add pagination here (slot="bottom")-->
  {/if}
</BoxLayout>

{#if !hasItemsToShow}
  {#if hasSelectedFilters}
    <BlankSlate heading="The profile doesn't have any repositories that match." />
  {:else}
    <BlankSlate heading="The profile doesn't have any repositories yet." />
  {/if}
{/if}
