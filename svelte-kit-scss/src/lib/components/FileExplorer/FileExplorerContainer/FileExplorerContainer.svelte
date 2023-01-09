<script lang="ts">
  import { GithubRepoContentsItemType } from '$lib/constants/github';
  import { File16, FileDirectoryFill16 } from 'svelte-octicons';
  import type { FileExplorerFolderContentItem } from '../models';
  import { sortFolderContentItems } from '../utils';

  export let parentHref: string | undefined = undefined;
  export let contents: FileExplorerFolderContentItem[] = [];

  $: items = sortFolderContentItems(contents);
</script>

<div class="file-list">
  {#if parentHref}
    <div class="item up-to-parent">
      <a href={parentHref} class="parent-link" data-testid="file-list-parent-link">. .</a>
    </div>
  {/if}
  {#each items as item}
    <div class="item" data-testid="file-list-item">
      {#if item.type === GithubRepoContentsItemType.Dir}
        <FileDirectoryFill16 color="#60a5fa" fill="#60a5fa" />
      {:else}
        <File16 color="#9ca3af" />
      {/if}
      <a href={item.href} class="link">{item.name}</a>
    </div>
  {/each}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $item-padding: 0.5rem 1rem;
  .file-list {
    border: 1px solid variables.$gray300;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
  }

  .item {
    border-bottom: 1px solid variables.$gray300;
    padding: $item-padding;
    display: flex;
    align-items: center;
    gap: 1rem;
    &.up-to-parent {
      padding: 0;
      .parent-link {
        text-decoration: none;
        font-weight: 700;
        color: variables.$blue600;
        width: 100%;
        height: 100%;
        padding: $item-padding;
      }
    }
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      background-color: variables.$gray100;
    }
  }
</style>
