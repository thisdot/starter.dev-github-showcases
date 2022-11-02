<script lang="ts">
  import FilterDropdown from '$lib/components/FilterDropdown/FilterDropdown.svelte';
  import { writable } from 'svelte/store';
  import { OrderField, TypeFilter } from '../../constants/filters';

  const repoControlsInit = {
    searchInput: '',
    typeFilter: TypeFilter.All,
    languageFilter: TypeFilter.All,
    sortFilter: OrderField.UpdatedAt,
  };
  let hasActiveSortAndFilters;
  const repoControls = writable(repoControlsInit);

  function handleTypeClick(event: CustomEvent<TypeFilter>) {
    repoControls.update((prevValue) => ({ ...prevValue, typeFilter: event.detail }));
  }

  function handleLanguageClick(event: CustomEvent<TypeFilter>) {
    repoControls.update((prevValue) => ({ ...prevValue, languageFilter: event.detail }));
  }

  function handleSortClick(event: CustomEvent<OrderField>) {
    repoControls.update((prevValue) => ({ ...prevValue, sortFilter: event.detail }));
  }

  function handleClearClick(): void {
    repoControls.set(repoControlsInit);
  }
</script>

<section>
  <div class="controls">
    <input
      id="searchInput"
      aria-label="Search repository"
      type="search"
      placeholder="Find a repository..."
      bind:value={$repoControls.searchInput}
    />

    <!--      TODO: fix the "current" input for this and the rest in this file-->
    <FilterDropdown
      name="Type"
      description="Select type"
      items={$repoControls.typeFilters}
      current="selectFilterByType$ | async"
      on:setFilter={repoControlsInit}
    />
    <FilterDropdown
      name="Language"
      description="Select Language"
      [current]="selectFilterByLanguage$ | async"
      items={$repoControls.languageFilter}
      on:setFilter={handleLanguageClick}
    />
    <FilterDropdown
      name="Sort"
      description="Select sort"
      [items]="sortItems"
      [current]="selectSortFilter$ | async"
      items={$repoControls.sortItems}
      on:setFilter={handleSortClick}
    />
  </div>
</section>

<style lang="scss">
  @use 'src/lib/styles/variables';

  section {
    margin: 1.3em 0 0 2.5em;
  }

  .controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.6em;
    margin-bottom: 1.2em;

    input {
      flex-grow: 1;
      margin-right: 0.6em;
      padding: 0.4rem;
      border-radius: 0.4rem;
      border: 1px solid variables.$gray200;
      line-height: 1.5rem;
    }

    .control-dropdown {
      display: inline-flex;
      align-items: center;
      border-radius: 0.375rem;
      border: 1px solid variables.$gray300;
      background-color: variables.$gray100;
      padding: 0.375rem 1rem;
      line-height: 1.25rem;
      color: variables.$gray900;

      &__name {
        font-weight: 600;
      }

      &__caret {
        margin-left: 0.25em;
      }
    }
  }

  .divider {
    width: 100%;
    height: 2px;
    background: variables.$gray100;
  }

  .results {
    display: flex;
    margin-bottom: 0.25rem;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;

    &__text {
      flex-grow: 1;
    }

    &__clear {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: variables.$gray500;
      &:hover {
        color: variables.$blue600;
      }
      &__icon {
        background: variables.$gray500;
        border-radius: 0.3rem;
        width: 1.4rem;
        height: 1.4rem;
        display: grid;
        place-items: center;
      }
      &:hover &__icon {
        background: variables.$blue600;
      }
    }
  }
</style>
