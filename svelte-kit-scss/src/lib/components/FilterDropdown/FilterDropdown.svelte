<script lang="ts">
  import type { FilterOption } from '$lib/interfaces';
  import { Check16, ChevronDown16, X16 } from 'svelte-octicons';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';

  export let name = '';
  export let description = '';
  export let current: string | null = '';
  export let items: FilterOption[] = [];
  export let toggle = false;
  export let isRepo = false;
  const dispatch = createEventDispatcher();

  let isOpen = false;
  const filterEventName = 'setFilter';

  function toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  function handleSetFilterClick(label: string) {
    if (label === this.current) {
      if (this.toggle) {
        dispatch(filterEventName, '');
      } else {
        dispatch(filterEventName, this.items[0].value);
      }
    } else {
      dispatch(filterEventName, label);
    }
    isOpen = false;
  }

  function handleClearFilterClick() {
    dispatch(filterEventName, this.items[0].value);
    isOpen = false;
  }

  function handleCloseDropdown() {
    isOpen = false;
  }

  onMount(() => {
    document.addEventListener('click', handleCloseDropdown);
  });

  if (browser) {
    onDestroy(() => {
      document.removeEventListener('click', handleCloseDropdown);
    });
  }
</script>

<ul class="filter-dropdown-container">
  <li>
    <button class="control-dropdown" class:control-dropdown--repo={isRepo} on:click={toggleMenu}>
      <span class="control-dropdown__name">{name}</span>
      <span class="control-dropdown__caret">
        <ChevronDown16 height="14" width="14" />
      </span>
    </button>
  </li>

  {#if isOpen}
    <li class="menu" data-testid="filterDropdown">
      {#if description}
        <div class="menu__header">
          <div class="menu__header__description">{{ description }}</div>
          <span on:click={handleClearFilterClick} class="menu__header__icon">
            <X16 width="14" height="14" />
          </span>
        </div>
        {#each items as item}
          <button
            type="button"
            class="menu__item-button"
            on:click={() => handleSetFilterClick(item.value)}
          >
            {#if item.value === current}
              <span class="menu__item-icon">
                <Check16 width="14" height="14" />
              </span>
            {/if}
            <span>{item.label}</span>
          </button>
        {/each}
      {/if}
    </li>
  {/if}
</ul>

<style lang="scss">
  @use 'src/lib/styles/variables';

  .filter-dropdown-container {
    margin: 0;
    padding: 0;
    position: relative;

    li {
      list-style-type: none;
    }

    .control-dropdown {
      display: inline-flex;
      align-items: center;
      border-radius: 0.375rem;
      border: 1px solid variables.$gray100;
      background-color: variables.$gray100;
      padding: 0.5rem 1.25rem;
      line-height: 1.25rem;
      color: variables.$gray600;
      font-size: 1rem;

      &--repo {
        padding: 0;
      }

      &__name {
        font-weight: 500;
      }

      &__caret {
        margin-left: 0.375em;
      }
    }

    .menu {
      position: absolute;
      right: 0;
      margin-top: 0.5rem;
      background-color: #ffffff;
      transform-origin: top right;
      width: 18rem;
      border-radius: 0.375rem;
      border: 1px solid #d1d5db;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

      &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__description {
          padding: 0.625rem 1rem;
          font-size: 0.75rem;
          line-height: 1rem;
          font-weight: 600;
        }

        &__icon {
          cursor: pointer;
          position: absolute;
          right: 1rem;
          display: inline;
        }
      }

      &__item-button {
        cursor: pointer;
        border: none;
        background-color: variables.$white;
        position: relative;
        padding: 0.5rem 2.5rem;
        font-size: 0.85rem;
        line-height: 1rem;
        text-align: left;
        text-transform: capitalize;
        width: 100%;
        border-top: 1px solid #d1d5db;

        &:hover {
          background-color: #f3f4f6;
        }
      }

      &__item-icon {
        position: absolute;
        left: 1rem;
        display: inline;
      }
    }
  }
</style>
