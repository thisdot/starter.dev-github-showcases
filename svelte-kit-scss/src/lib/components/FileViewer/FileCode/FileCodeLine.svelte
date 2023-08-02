<script lang="ts">
  import type { StyleObj, Token } from '../types';
  import { serializeStyles, type ThemeDict } from '../utils';

  export let tokens: Token[];
  export let themeDict: ThemeDict;
  export let number: number;

  const styleExtras: string = serializeStyles(themeDict.plain);

  const getStyleForToken = ({ types, empty }: Token): StyleObj => {
    const typesSize = types.length;

    if (!themeDict) {
      return {};
    } else if (typesSize === 1 && types[0] === 'plain') {
      return empty ? { display: 'inline-block' } : {};
    } else if (typesSize === 1 && !empty) {
      return themeDict[types[0]];
    }

    const baseStyle = empty ? { display: 'inline-block' } : {};
    const typeStyles = types.map((type) => themeDict[type]);
    return Object.assign(baseStyle, ...typeStyles);
  };
</script>

<tr class="token-line" style={styleExtras}>
  <td class="number"><span>{number}</span></td>
  <td class="content">
    <pre class="content-wrapper">{#each tokens as token}<span
          class={`token ${token.types.join(' ')}`}
          style={serializeStyles(getStyleForToken(token))}>{token.content}</span
        >{/each}</pre>
  </td>
</tr>

<style lang="scss">
  .token-line {
    .number {
      text-align: right;
    }
    .content {
      .content-wrapper {
        margin: 0;
      }
    }
  }
</style>
