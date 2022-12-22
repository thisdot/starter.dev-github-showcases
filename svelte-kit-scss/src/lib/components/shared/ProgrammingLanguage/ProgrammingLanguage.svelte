<script lang="ts">
  import { LANGUAGE_COLORS } from '$lib/constants/language-colors';
  export let name: string;

  function getLanguageColor(name: string | null | undefined): string {
    return LANGUAGE_COLORS[String(name)];
  }
</script>

<div class="programming-language">
  <span class="marker" style="background-color: {getLanguageColor(name)}" />
  <span class="label">{name}</span>
</div>

<style lang="scss">
  .programming-language {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.25em;
    .marker {
      height: 1em;
      width: 1em;
      border-radius: 100%;
    }
  }
</style>
