<script lang="ts">
  import BoxLayout from '$lib/components/shared/layouts/BoxLayout.svelte';
  import RepositoryList from '../RepositoryList/RepositoryList.svelte';
  import type { AllRepositoriesListViewModel } from '../view-models';

  export let model: AllRepositoriesListViewModel;
  $: ({ repositories: items } = model);
</script>

<BoxLayout>
  <!-- todo: add filters here (slot="top") -->
  <RepositoryList {items} />
  <!-- todo: add pagination here (slot="bottom")-->
</BoxLayout>
