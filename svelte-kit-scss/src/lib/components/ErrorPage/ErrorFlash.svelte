<script lang="ts">
  import { X16 } from 'svelte-octicons';
  export let message: string | undefined;
  let show = Boolean(message);
  const handleCloseClick = () => (show = false);
</script>

{#if show}
  <div class="flash-container">
    <div class="flash">
      <div class="message">
        {message}
      </div>
      <div class="close">
        <button class="close-button" on:click={handleCloseClick}>
          <X16 />
        </button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .flash-container {
    padding: 1.25rem 1rem;
    background: variables.$yellow200;
    .flash {
      display: flex;
      padding: 0 0.5rem;
      .message {
        flex-grow: 1;
      }
      .close {
        .close-button {
          border: none;
          background: none;
          padding: 0;
          color: variables.$orange600;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
</style>
