<script lang="ts">
  import { nightOwlLight } from './themes';
  import { serializeStyles } from './utils';

  export let content: string | undefined;
  const lines: string[] = content?.split('\n') || [];

  const styleObj = nightOwlLight.plain || {};
  const style = serializeStyles(styleObj);
</script>

<div class="file-text-component">
  <table data-testid="text_block" class="text-block">
    <tbody>
      {#each lines as line, index}
        <tr class="line">
          <td class="number">{index + 1}</td>
          <td class="text"><pre><span {style}>{line}</span></pre></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  .text-block {
    border-spacing: 5px;
    font-size: 12px; // todo: .75rem
    line-height: 16px; // todo: 1rem
    padding: 0.25rem 2rem;
    overflow: auto;
    .line {
      .number {
        text-align: right;
      }
      .text {
        pre {
          margin: 0;
        }
      }
    }
  }
</style>
