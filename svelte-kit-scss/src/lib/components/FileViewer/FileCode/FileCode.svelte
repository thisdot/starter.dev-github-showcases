<script lang="ts">
  import Prism from 'prismjs';
  import type { Language, PrismTheme } from '$lib/components/FileViewer/types';
  import { nightOwlLight } from '../themes';

  import { themeToDict, normalizeTokens, serializeStyles } from '../utils';
  import FileCodeLine from './FileCodeLine.svelte';

  export let content: string | undefined;
  export let language: Language;

  const theme: PrismTheme = nightOwlLight;
  const themeDict = themeToDict(theme, language);

  const grammar = Prism.languages[language];

  const mixedTokens =
    content && grammar ? Prism.tokenize(content, grammar) : ([content].filter(Boolean) as string[]);
  const lines = normalizeTokens(mixedTokens);
  const plainStyles = serializeStyles(themeDict.plain);
</script>

<div class="file-code-component">
  <table
    data-testid="code_block"
    class={`code-block prism-code language-${language}`}
    style={plainStyles}
  >
    <tbody>
      {#each lines as lineTokens, index}
        <FileCodeLine number={index + 1} tokens={lineTokens} {themeDict} />
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  .code-block {
    border-spacing: 5px;
    font-size: 12px; // todo: .75rem
    line-height: 16px; // todo: 1rem
    padding: 0.25rem 2rem;
    overflow: auto;
  }
</style>
