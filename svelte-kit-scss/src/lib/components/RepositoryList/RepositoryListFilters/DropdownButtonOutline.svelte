<script lang="ts">
  import { ChevronDown12 } from 'svelte-octicons';
</script>

<button class="dropdown-button-outline" on:click on:keypress>
  <slot />
  <ChevronDown12 />
</button>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $border: 1px solid variables.$gray300;
  .dropdown-button-outline {
    $border: 1px solid variables.$gray300;
    padding: 0.375em 1em;
    line-height: 1.5em;
    font-size: 1em;
    font-weight: 500;
    border-radius: 0.375em;
    border: 1px solid variables.$gray300;
    background-color: variables.$gray100;
    display: flex;
    align-items: center;
    gap: 0.25em;
  }
</style>
