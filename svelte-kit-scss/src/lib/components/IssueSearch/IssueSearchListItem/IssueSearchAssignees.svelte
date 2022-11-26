<script lang="ts">
  import type { IssueAssignee } from '$lib/interfaces';

  export let assignees: IssueAssignee[];
  $: assigneesReversed = assignees.slice().reverse();
  $: assigneesCount = assignees.length;

  let itemSizePx = 0;
  $: computeMarginRightPx = (index: number): number => {
    console.log('computeMarginRightPx');
    console.log('index', index);
    console.log('index', itemSizePx);
    const powerOf2 = assigneesCount - 1 - index;
    return itemSizePx / Math.pow(2, powerOf2) - itemSizePx;
  };
</script>

<div class="issue-search-assignees">
  <div
    class="zone"
    bind:clientHeight={itemSizePx}
    style="visibility: {itemSizePx ? 'visible' : 'hidden'}"
  >
    {#each assigneesReversed as assignee, i}
      <div
        class="assignee"
        style="margin-right: {computeMarginRightPx(i)}px;"
        class:last={i === assigneesCount - 1}
      >
        <img class="image" src={assignee.avatarUrl} alt={assignee.login} />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  $size: 1.25em;
  .issue-search-assignees {
    position: relative;
    height: $size;
    .zone {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      &:hover {
        .assignee {
          margin-right: 4px !important;
          &.last {
            margin-right: 0px !important;
          }
        }
      }
      .assignee {
        height: $size;
        width: $size;
        display: inline-block;
        transition: margin-right 0.3s ease-in-out;
        .image {
          border-radius: 100%;
          height: 100%;
          width: 100%;
          cursor: pointer;
        }
      }
    }
  }
</style>
