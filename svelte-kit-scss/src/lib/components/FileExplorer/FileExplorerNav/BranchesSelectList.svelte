<script lang="ts">
  import type { BranchOption } from '../models';
  import { Check16 } from 'svelte-octicons';
  import { goto } from '$app/navigation';

  export let options: BranchOption[];
  export let defaultBranch: string | undefined = undefined;
  export let currentBranch: string;

  const isDefault = (option: BranchOption): boolean => option.name === defaultBranch;
  const isCurrent = (option: BranchOption): boolean => option.name === currentBranch;

  const handleItemClick = async (option: BranchOption): Promise<void> => {
    if (isCurrent(option)) {
      return;
    }
    await goto(option.href);
  };
</script>

<div class="branches-select-list">
  {#if options.length}
    {#each options as option}
      <div
        class="item"
        class:default={isDefault(option)}
        class:current={isCurrent(option)}
        on:click={async () => await handleItemClick(option)}
        on:keypress={async () => await handleItemClick(option)}
      >
        <div class="checkbox">
          <Check16 />
        </div>
        <div class="name">
          {option.name}
        </div>
        {#if isDefault(option)}
          <div>
            <span class="chip">default</span>
          </div>
        {/if}
      </div>
    {/each}
  {:else}
    <div class="empty">
      <span>No Branches Found</span>
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $itemPadding: 0.75em 1.25em;
  .branches-select-list {
    max-height: 20rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    line-height: normal;
    .item {
      border-bottom: 1px solid variables.$gray300;
      display: flex;
      padding: $itemPadding;
      gap: 0.25em;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: variables.$gray100;
      }
      &.default {
        order: -1;
      }
      .checkbox {
        visibility: hidden;
      }
      &.current {
        .checkbox {
          visibility: visible;
        }
      }
      .name {
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: variables.$gray400;
      padding: $itemPadding;
    }
  }

  .chip {
    border: 1px solid variables.$gray300;
    border-radius: 1em;
    line-height: 1;
    padding: 0 0.5em;
    color: variables.$gray600;
    font-weight: 600;
  }
</style>
