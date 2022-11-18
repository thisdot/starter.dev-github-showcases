<script lang="ts">
  import type { BranchOption } from '../models';

  export let options: BranchOption[];
  export let defaultBranch: string | undefined = undefined;

  const isDefault = (branch: BranchOption): boolean => branch.name === defaultBranch;
</script>

<div class="branches-select-list">
  {#each options as option}
    <div class="item" class:default={isDefault(option)}>
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
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $itemPaddingTop: 0.75em;
  $itemLineHeight: 1em;

  $itemsAreaHeight: #{($itemPaddingTop * 2 + $itemLineHeight) * 9};

  .branches-select-list {
    max-height: $itemsAreaHeight;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 100%;
    .item {
      border-bottom: 1px solid variables.$gray300;
      display: flex;
      padding: $itemPaddingTop 1.25em;
      &:hover {
        background: variables.$gray100;
      }
      &.default {
        order: -1;
      }
      .name {
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
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
