<script lang="ts">
  import { MarkGithub16 } from 'svelte-octicons';
  export let status: number;
  $: [first, second, third] = Array.from(String(status), Number);
</script>

<div class="error-block-container">
  <div class="status">
    <span class="part">{first}</span>
    <div class="part">
      {#if second}
        {second}
      {:else}
        <MarkGithub16 class="github-icon" />
      {/if}
    </div>
    <span class="part">{third}</span>
  </div>
  <div class="label">
    <h4>Didn’t find anything here!</h4>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .error-block-container {
    padding: 2rem 0;
    background: variables.$gray900;
    color: variables.$gray50;
    .status {
      padding: 2rem 0 0 0;
      margin: 0 0.5rem 1.25rem 0.5rem;
      font-size: 6.25rem;
      display: flex;
      justify-content: center;
      align-items: stretch;
      gap: 0.25rem;
      .part {
        line-height: 1;
        vertical-align: baseline;
        :global(.github-icon) {
          height: auto;
          width: 0.75em;
          vertical-align: baseline;
        }
      }
    }
    .label {
      padding: 0 0 2rem 0;
      h4 {
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }
</style>
