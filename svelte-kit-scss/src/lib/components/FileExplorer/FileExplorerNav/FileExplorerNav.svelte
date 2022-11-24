<script lang="ts">
  import { ChevronDown16, GitBranch16 } from 'svelte-octicons';
  import DropdownMenu from '$lib/components/shared/Dropdown/DropdownMenu.svelte';
  import BranchesSelectList from './BranchesSelectList.svelte';
  import type { BranchOption } from '../models';
  export let branches: BranchOption[];
  export let defaultBranch: string;
  export let currentBranch: string;

  let searchTerm = String();

  $: options = branches.filter((x) => x.name).filter((x) => x.name.includes(searchTerm));
  const reset = () => {
    searchTerm = String();
  };
</script>

<nav class="file-explorer-container">
  <DropdownMenu description="Select branches">
    <button class="dropdown-button" on:click={reset} on:keypress={reset}>
      <GitBranch16 />
      <span class="label">{currentBranch}</span>
      <ChevronDown16 />
    </button>
    <svelte:fragment slot="content">
      <div class="menu-content">
        <div class="search">
          <input
            type="text"
            class="search-input"
            placeholder="Find a branch"
            bind:value={searchTerm}
          />
        </div>
        <div class="tabs">
          <div class="tab active">Branches</div>
        </div>
        <BranchesSelectList {options} {defaultBranch} {currentBranch} />
      </div>
    </svelte:fragment>
  </DropdownMenu>
</nav>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $borderWidth: 1px;
  $border: $borderWidth solid variables.$gray300;
  .file-explorer-container {
    display: flex;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    align-items: center;
    .dropdown-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5em;
      max-width: 12rem;
      border-radius: 4px;
      border: $border;
      padding: 0.5em 1em;
      font-weight: 600;
      color: variables.$gray700;
      background: variables.$gray100;
      &:hover {
        background: variables.$gray200;
      }
      .label {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
      }
    }
    .menu-content {
      width: 18.75rem;
      .search {
        border-bottom: $border;
        padding: 0.55em 1em;
        .search-input {
          border: $border;
          border-radius: 4px;
          width: 100%;
          padding: 0.25em 0.75em;
          outline-color: variables.$blue600;
        }
      }
      .tabs {
        border-bottom: $border;
        padding: 1em 0.5em 0 0.5em;
        display: flex;
        .tab {
          border: $border;
          margin-bottom: -$borderWidth;
          border-radius: 4px 4px 0 0;
          padding: 0.25em 0.75em;
          font-weight: 600;
          &.active {
            border-bottom-color: variables.$white;
          }
        }
      }
    }
  }
</style>
