<script lang="ts">
  import type { BreadcrumbData } from '$lib/interfaces';

  export let breadcrumbData: BreadcrumbData;

  $: ({ repo, username, breadcrumbs } = breadcrumbData);
</script>

<div class="crumbs">
  <a href={`/${username}/${repo}`} class="rootLink" data-testid={'file explorer nav root ' + repo}>
    {repo}
  </a>
  <span class="separator">/</span>

  {#each breadcrumbs as breadcrumb, i}
    {#if i === breadcrumbs.length - 1}
      <span data-testid={'file explorer nav end ' + breadcrumb.name} class="crumbEnd">
        {breadcrumb.name}
      </span>
    {:else}
      <a
        data-testid={'file explorer nav crumb ' + breadcrumb.name}
        href={breadcrumb.href}
        class="crumbLink"
      >
        {breadcrumb.name}
      </a>
      <span class="separator">/</span>
    {/if}
  {/each}
</div>

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
