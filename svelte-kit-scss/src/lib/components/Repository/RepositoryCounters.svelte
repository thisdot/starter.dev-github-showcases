<script lang="ts">
  import type { RepositoryState } from '$lib/interfaces';
  import { Eye16, RepoForked16, Star16 } from 'svelte-octicons';
  import NamedCounter from './NamedCounter.svelte';

  export let repositoryState: RepositoryState;
  $: ({ watchersCount, stargazersCount, forksCount } = repositoryState);
</script>

<div class="repository-counters">
  <NamedCounter label="Watch" icon={Eye16} count={watchersCount} />
  <NamedCounter label="Fork" icon={RepoForked16} count={forksCount} />
  <NamedCounter label="Star" icon={Star16} count={stargazersCount} />
</div>

<style lang="scss">
  .repository-counters {
    display: flex;
    gap: 0.5rem;
  }
</style>
