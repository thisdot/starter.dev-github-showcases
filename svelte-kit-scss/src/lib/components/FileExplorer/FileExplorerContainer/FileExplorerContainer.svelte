<script lang="ts">
  import { GithubRepoContentsItemType } from '$lib/constants/github';
  import { File16, FileDirectoryFill16 } from 'svelte-octicons';
  import type { RepoFolderData } from '../models';
  import { sortFolderContentItems } from '../utils';

  export let folder: RepoFolderData, branch: string, username: string, repo: string;

  $: items = sortFolderContentItems(folder.contents);
  $: folderPathSegments = folder.path.split('/');
  $: isRoot = !folderPathSegments.filter(Boolean).length;
  $: parentPath = folderPathSegments.slice(0, -1).join('/');
  $: parentHref = getPathHref(GithubRepoContentsItemType.Dir, parentPath);

  function getPathHref(type: GithubRepoContentsItemType, path: string): string {
    const basePath = `/${username}/${repo}`;
    const typeSegment = type === GithubRepoContentsItemType.Dir ? 'tree' : 'blob';
    return `${basePath}/${typeSegment}/${branch}/${path}`;
  }
</script>

<div class="container file-list">
  {#if !isRoot}
    <div class="item up-to-parent">
      <a href={parentHref} class="parent-link">. .</a>
    </div>
  {/if}
  {#each items as item}
    <div class="item">
      {#if item.type === GithubRepoContentsItemType.Dir}
        <FileDirectoryFill16 color="#60a5fa" fill="#60a5fa" />
      {:else}
        <File16 color="#9ca3af" />
      {/if}
      <a href={getPathHref(item.type, item.path)} class="link">{item.name}</a>
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
