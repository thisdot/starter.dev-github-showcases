<script lang="ts">
  import BoxLayout from '$lib/components/shared/layouts/BoxLayout.svelte';
  import RepositoryList from '../RepositoryList/RepositoryList.svelte';
  import RepositoryListControls from '../RepositoryListFilters/RepositoryListControls.svelte';
  import type { AllRepositoriesListViewModel } from '../view-models';

  export let model: AllRepositoriesListViewModel;
  $: ({ repositories: items, controls } = model);
</script>

<BoxLayout>
  <RepositoryListControls slot="top" {controls} />
  <RepositoryList {items} />
  <!-- todo: add pagination here (slot="bottom")-->
</BoxLayout>
