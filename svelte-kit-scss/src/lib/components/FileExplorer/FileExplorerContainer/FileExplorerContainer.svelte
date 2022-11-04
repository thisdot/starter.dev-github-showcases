<script lang="ts">
  import { File16, FileDirectoryFill16 } from 'svelte-octicons';
  import type { RepoContents } from '$lib/interfaces';

  export let contents: RepoContents[], branch: string, username: string, repo: string;

  function getPathHref(item: RepoContents): string {
    const basePath = `/${username}/${repo}`;
    const typeSecment = item.type === 'dir' ? 'tree' : 'blob';
    return `${basePath}/${typeSecment}/${branch}/${item.path}`;
  }
</script>

<div class="container file-list">
  {#each contents as item}
    <div class="item">
      {#if item.type === 'file'}
        <File16 color="#9ca3af" />
      {:else}
        <FileDirectoryFill16 color="#60a5fa" fill="#60a5fa" />
      {/if}
      <a href={getPathHref(item)} class="link">{item.name}</a>
    </div>
  {/each}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .file-list {
    border: 1px solid variables.$gray300;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
  }

  .item {
    border-bottom: 1px solid variables.$gray300;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:last-child {
      border-bottom: 0;
    }
  }
</style>
