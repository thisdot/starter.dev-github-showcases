<script lang="ts">
  import type { IssueLabel } from '$lib/interfaces';
  import { hexToRgb } from '../utils';

  export let label: IssueLabel;

  $: ({ name, color } = label);

  $: ({ red, green, blue } = hexToRgb(color) || { red: 255, green: 255, blue: 255 });
  $: perceivedLightness = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 255;
  $: lightnessSwitch = Math.max(0, Math.min((perceivedLightness - 0.453) * -1000, 1));
  $: lightnessSwitchPercentage = lightnessSwitch * 100;

  $: style = `
    background: #${color};
    color: hsl(0deg, 0%, ${lightnessSwitchPercentage}%);
  `;
</script>

<span class="issue-label noselect" {style}>
  {name}
</span>

<style lang="scss">
  .issue-label {
    display: inline-block;
    font-size: 0.75em;
    padding: 0.25em 0.5em;
    line-height: 1em;
    border-radius: 0.75em;
  }
</style>
