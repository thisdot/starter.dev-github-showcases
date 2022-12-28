<script lang="ts">
  import type { RepositoryState } from '$lib/interfaces';
  import Breadcrumbs from '$lib/components/shared/Breadcrumbs/Breadcrumbs.svelte';
  import VisibilityLabel from './VisibilityLabel.svelte';
  import type { Breadcrumb } from '$lib/components/shared/Breadcrumbs/models';
  import { Repo16 } from 'svelte-octicons';

  export let repositoryState: RepositoryState;
  export let breadcrumbs: Breadcrumb[];

  $: ({ visibility } = repositoryState);
</script>

<div class="repository-heading">
  <div class="icon">
    <Repo16 />
  </div>
  <div class="breadcrumbs">
    <Breadcrumbs {breadcrumbs} />
  </div>
  <VisibilityLabel {visibility} />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .repository-heading {
    .icon {
      color: variables.$gray600;
      display: inline-block;
    }
    .breadcrumbs {
      display: inline-block;
      font-size: 1.125em;
      @media (min-width: variables.$md) {
        font-size: 1.25em;
      }
    }
  }
</style>
