<script lang="ts">
  export let username: string, repo: string, branch: string, path: string | undefined;

  let basePath = `${username}/${repo}`;
  let crumbs: string[] = [];

  $: crumbs = path?.split('/').filter(Boolean) as string[];

  const getHref = (i: number): string => {
    const crumbPath = crumbs.slice(0, i + 1).join('/');
    return `${basePath}/tree/${branch}/${crumbPath}`;
  };
</script>

{#if crumbs.length > 0}
  <div class="crumbs">
    <a href={basePath} class="rootLink" data-testid={'file explorer nav root ' + repo}>
      {repo}
    </a>
    <span class="separator">/</span>

    {#each crumbs as crumb, i}
      {#if i === crumbs.length - 1}
        <span data-testid={'file explorer nav end ' + crumb} class="crumbEnd">
          {crumb}
        </span>
      {:else}
        <a data-testid={'file explorer nav crumb ' + crumb} href={getHref(i)} class="crumbLink">
          {crumb}
        </a>
        <span class="separator">/</span>
      {/if}
    {/each}
  </div>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .rootLink {
    color: variables.$blue600;
    font-weight: 600;
  }

  .crumbs {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .crumbLink {
    color: variables.$blue600;
  }

  .crumbEnd {
    font-weight: 600;
  }

  .separator {
    margin-left: 0.375rem;
    margin-right: 0.375rem;
    color: variables.$gray800;
    font-size: 1.125rem;
    line-height: 1.375;
  }
</style>
