<script lang="ts">
  import { clickOutside } from '$lib/components/shared/actions/clickOutside';
  import { X16 } from 'svelte-octicons';
  import { scale } from 'svelte/transition';
  export let description: string | undefined;
  let isOpen = false;
  const close = (): void => {
    isOpen = false;
  };
  const toggle = (): void => {
    isOpen = !isOpen;
  };

  $: descriptionDisplay = description || String();
</script>

<div class="dropdown-container noselect" use:clickOutside on:clickoutside={close}>
  <div on:click|stopPropagation={toggle} on:keypress|stopPropagation={toggle}>
    <slot />
  </div>
  {#if isOpen}
    <div class="menu" transition:scale={{ duration: 100, start: 0.95 }}>
      <div class="header">
        <div class="description">{descriptionDisplay}</div>
        <div class="close" on:click={close} on:keypress={close}>
          <X16 class="close-icon" />
        </div>
      </div>
      <slot name="content" />
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $border: 1px solid variables.$gray300;
  .dropdown-container {
    display: inline-block;
    position: relative;
    .menu {
      font-size: 12px;
      line-height: 1;
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 8px;
      border: $border;
      background: variables.$white;
      border-radius: 4px;
      box-shadow: variables.$gray400 0 0.5rem 1.5rem 0;
      .header {
        display: flex;
        padding: 0.625em 1em;
        font-weight: 600;
        border-bottom: $border;
        gap: 0.5em;
        align-items: center;
        .description {
          flex-grow: 1;
          white-space: nowrap;
          height: 100%;
          display: flex;
        }
        .close {
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
          :global(.close-icon) {
            height: 1.25em;
            width: 1.25em;
          }
        }
      }
    }
  }
</style>
