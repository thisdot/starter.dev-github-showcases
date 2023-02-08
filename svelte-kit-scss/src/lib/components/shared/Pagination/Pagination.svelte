<script lang="ts">
  import { ChevronLeft16, ChevronRight16 } from 'svelte-octicons';
  import PaginationButton from './PaginationButton.svelte';
  import type { PaginationViewModel } from './view-models';

  export let model: PaginationViewModel;
  $: ({ previousPageHref, nextPageHref, pagesHrefs, currentPage } = model);
  $: pageLabelHrefPairs = pagesHrefs ? Object.entries(pagesHrefs) : [];
</script>

<div class="pagination noselect">
  <PaginationButton
    icon={ChevronLeft16}
    label="Previous"
    href={previousPageHref}
    disabled={!previousPageHref}
  />
  {#each pageLabelHrefPairs as [label, href]}
    <PaginationButton {label} {href} current={Number(label) === currentPage} />
  {/each}
  <PaginationButton
    icon={ChevronRight16}
    iconPosition="end"
    label="Next"
    href={nextPageHref}
    disabled={!nextPageHref}
  />
</div>

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    gap: 0.25em;
  }
</style>
