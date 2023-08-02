<script lang="ts">
  import { mapLanguageExt } from '$lib/helpers/file';
  import type { FileContents } from '$lib/interfaces';
  import type { Language } from '$lib/components/FileViewer/types/language';
  import FileCode from './FileCode/FileCode.svelte';
  import FileText from './FileText.svelte';
  export let fileContents: FileContents | undefined;

  const extension: string | undefined = fileContents?.name.split('.').pop();
  const language: Language | undefined = mapLanguageExt(extension);
  const lineCount: number = fileContents?.content?.split('\n').length || 0;

  const { size, content } = fileContents || {};
</script>

{#if fileContents}
  <div class="file-viewer-component">
    <div class="header">
      <span data-testid="file viewer line count" class="file-line-count">{lineCount} lines</span>
      <span data-testid="file viewer byte size" class="file-size">{size} Bytes</span>
    </div>
    {#if language}
      <FileCode {content} {language} />
    {:else}
      <FileText {content} />
    {/if}
  </div>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .file-viewer-component {
    overflow: hidden;
    border-radius: 0.5rem;
    border: 1px solid variables.$gray300;
    font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    .header {
      padding: 0.75rem 1rem;
      background-color: variables.$gray100;
      color: variables.$gray800;
      font-size: 0.75rem;
      line-height: 1rem;
      border-bottom: 1px solid variables.$gray300;
      .file-line-count {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      .file-size {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-left: 1px solid variables.$gray300;
      }
    }
  }
</style>
