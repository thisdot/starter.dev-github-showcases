<script lang="ts">
  import { ListUnordered16 } from 'svelte-octicons';

  export let html: string;
</script>

{#if html}
  <div class="header">
    <ListUnordered16 />
    <span class="filename">README.md</span>
  </div>
  <div class="content">
    <span class="markdown">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html html}
    </span>
  </div>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .header {
    position: sticky;
    top: 0;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom: 1px solid variables.$gray300;
    background-color: variables.$white;
    padding: 1em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1em;
    .filename {
      font-size: 0.875em;
      line-height: 1;
    }
  }
  .content {
    padding: 1em 2em;
  }
</style>
