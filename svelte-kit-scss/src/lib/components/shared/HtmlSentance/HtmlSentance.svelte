<script lang="ts">
  import type { HtmlSentanceNode } from './view-models';
  export let nodes: HtmlSentanceNode[];
</script>

<span class="html-sentance">
  {#each nodes as node, index}
    {#if index}
      {' '}
    {/if}
    {#if node.emphasis}
      <strong>{node.text}</strong>
    {:else}
      {node.text}
    {/if}
  {/each}
</span>
