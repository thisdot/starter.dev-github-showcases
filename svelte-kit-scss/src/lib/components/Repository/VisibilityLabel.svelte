<script lang="ts">
  export let visibility: string;
</script>

<span class="visibility-label" data-testid="visibility">{visibility}</span>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .visibility-label {
    font-size: 0.75em;
    font-weight: 500;
    text-transform: capitalize;
    border: 1px solid variables.$gray300;
    line-height: 1.5em;
    padding: 0 0.5em;
    border-radius: 0.75em;
    color: variables.$gray600;
    margin-left: 0.5em;
  }
</style>
