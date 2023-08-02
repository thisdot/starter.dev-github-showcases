<script lang="ts">
  import type { HtmlSentenceNode } from './view-models';
  export let nodes: HtmlSentenceNode[];
</script>

<span class="html-sentence">
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
