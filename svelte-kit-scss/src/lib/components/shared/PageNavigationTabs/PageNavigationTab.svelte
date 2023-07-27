<script lang="ts">
  import type { PageNavigationTabViewModel } from './models';
  import Icon from '$lib/components/shared/icons/Icon.svelte';

  export let tab: PageNavigationTabViewModel;
  $: ({ href, label, icon, count } = tab);
  $: countDefined = typeof count === typeof Number();
</script>

<a class="navigation-tab" {href}>
  <span class="content">
    {#if icon}
      <Icon name={icon} />
    {/if}
    <span class="label">
      {label}
    </span>
    {#if countDefined}
      <span class="count">
        {count}
      </span>
    {/if}
  </span>
</a>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .navigation-tab {
    color: inherit;
    text-decoration: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0.5em 0;
    .content {
      border-radius: 6px;
      padding: 0 0.5em;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: 0.5em;
      padding: 0.125em 0.5em;
      color: variables.$gray700;
      &:hover {
        background: rgba(variables.$gray300, 0.3);
      }
      .label {
        font-size: 0.875em;
        white-space: nowrap;
      }
      .count {
        font-size: 0.75em;
        font-weight: 600;
        border-radius: 0.75em;
        line-height: 1em;
        padding: 0.25em 0.5em;
        background: rgba(variables.$gray300, 0.5);
      }
    }
  }
</style>
