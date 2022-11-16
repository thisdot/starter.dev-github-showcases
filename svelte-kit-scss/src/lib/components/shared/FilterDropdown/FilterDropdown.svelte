<script lang="ts">
  import { clickOutside } from '../actions/clickOutside';
  import type { FilterDropdownOption } from './filter-option';
  import { createEventDispatcher } from 'svelte';
  import { scale } from 'svelte/transition';
  import { Check16, ChevronDown16, X16 } from 'svelte-octicons';

  export let name = '';

  export let description = 'Select option';

  export let defaultFilter: FilterDropdownOption | undefined = undefined;

  export let items: FilterDropdownOption[] = [];

  export let borderNone = false;

  export let current: FilterDropdownOption | undefined = defaultFilter;

  let isOpen = false;

  const toggleMenu = (): void => {
    isOpen = !isOpen;
  };

  const closeDropdown = (): void => {
    isOpen = false;
  };

  const dispatch = createEventDispatcher();

  const dispatchSetFilter = () => {
    dispatch('setFilter', current);
  };

  const handleFilterOptionClick = (item: FilterDropdownOption): void => {
    current = item;
    dispatchSetFilter();
    closeDropdown();
  };

  const handleResetFilterClick = (): void => {
    current = defaultFilter;
    dispatchSetFilter();
    closeDropdown();
  };
</script>

<div class="filter-dropdown-container" use:clickOutside on:clickoutside={closeDropdown}>
  <button class="button" class:border-none={borderNone} on:click={toggleMenu}>
    {name}
    <ChevronDown16 />
  </button>
  {#if isOpen}
    <div
      class="menu"
      data-testid="filterDropdown"
      transition:scale={{ duration: 100, start: 0.95 }}
    >
      <div class="header">
        <div class="description">{description}</div>
        <div class="reset" on:click={handleResetFilterClick} on:keypress={handleResetFilterClick}>
          <span class:invisible={current?.value === defaultFilter}>
            <X16 />
          </span>
        </div>
      </div>

      <ul class="items">
        {#each items as item}
          <li
            class="item noselect"
            on:click={() => handleFilterOptionClick(item)}
            on:keypress={() => handleFilterOptionClick(item)}
          >
            <span class="icon" class:invisible={item !== current}>
              <Check16 />
            </span>
            <span>{item.label}</span>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .filter-dropdown-container {
    position: relative;
    display: inline-block;
    font-size: 16px;
    .button {
      padding: 0.375em 1em;
      line-height: 1.5em;
      font-size: 0.875em;
      font-weight: 500;
      border-radius: 0.375em;
      border: 1px solid variables.$gray300;
      background-color: variables.$gray100;

      &.border-none {
        border: 0px;
        background: none;
      }
    }
    .menu {
      position: absolute;
      right: 0;
      margin-top: 0.5em;
      background-color: variables.$white;
      transform-origin: top right;
      width: 18em;
      border-radius: 0.375em;
      border: 1px solid variables.$gray300;
      box-shadow: 0 1px 2px 0 rgba(variables.$black, 0.05);
      .header {
        display: flex;
        padding: 0.625em 1em;
        font-size: 0.75em;
        line-height: 1em;
        font-weight: 600;
        .description {
          flex-grow: 1;
        }
        .reset {
          cursor: pointer;
        }
      }
      ul.items {
        padding: 0;
        margin: 0;
        list-style-type: none;
        .item {
          padding: 0.5em 1em;
          text-align: left;
          font-size: 0.75em;
          line-height: 1.25em;
          text-transform: capitalize;
          border-top: 1px solid variables.$gray300;
          &:hover {
            background-color: variables.$gray100;
          }
          .icon {
            margin-right: 0.25em;
          }
        }
      }
    }
  }
</style>
