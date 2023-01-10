<script lang="ts">
  import { ListUnordered16 } from 'svelte-octicons';

  export let html: string;
</script>

{#if html}
  <div id="readme">
    <div class="header">
      <span class="icon">
        <ListUnordered16 />
      </span>
      <span class="filename">README.md</span>
    </div>
    <div class="content">
      <span>
        {@html html}
      </span>
    </div>
  </div>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .header {
    position: sticky;
    z-index: 3;
    top: 0;
    background-color: variables.$white;
    font-weight: 600;
    padding: 0.625rem;
    border: 1px solid variables.$gray300;
    border-top-right-radius: .25em;
    border-top-left-radius: .25em;

    .icon {
      margin-right: 0.5rem;
    }
  }

  .content {
    padding: 0.625rem;
    border: 1px solid variables.$gray300;
    border-bottom-left-radius: 0.25em;
    border-bottom-right-radius: 0.25em;
    border-top: none;
  }
</style>
