<script lang="ts">
  import RepositoryCard from '../RepositoryCard/RepositoryCard.svelte';
  import type { RepositoryCardViewModel } from '../view-models';

  export let items: RepositoryCardViewModel[];
</script>

<ul class="repository-list">
  {#each items as model}
    <li class="item">
      <RepositoryCard {model} />
    </li>
  {/each}
</ul>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $border: 1px solid variables.$gray300;
  .repository-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    .item {
      padding: 1em;
      border-bottom: $border;
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>
