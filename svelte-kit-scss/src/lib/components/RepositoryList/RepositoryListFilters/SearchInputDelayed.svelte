<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Search16, Sync16 } from 'svelte-octicons';

  export let value: string | null | undefined;
  export let delay = 2000;
  let timeout: NodeJS.Timeout | undefined = undefined;
  $: loading = Boolean(timeout);

  const resetTimeout = (): void => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
  };

  const dispatch = createEventDispatcher<{ input: string | null }>();

  const dispatchFiltersChange = (newValue: string | null): void => {
    if (value !== newValue) {
      value = newValue;
      dispatch('input', newValue);
    }
    resetTimeout();
  };

  const scheduleInputDispatch = (value: string | null): void => {
    resetTimeout();
    timeout = setTimeout(() => dispatchFiltersChange(value), delay);
  };

  const handleInput = (event: Event): void => {
    const inputEvent = event as InputEvent;
    const inputElement = inputEvent.target as HTMLInputElement;
    const newValue = inputElement.value;
    scheduleInputDispatch(newValue);
  };
</script>

<div class="search-input-delayed">
  <div class="icon">
    {#if loading}
      <Sync16 />
    {:else}
      <Search16 />
    {/if}
  </div>

  <input
    class="input"
    aria-label="Search repository"
    type="search"
    placeholder="Find a repository..."
    value={value || ''}
    on:input={handleInput}
  />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .search-input-delayed {
    display: inline-block;
    flex-grow: 1;
    position: relative;
    .icon {
      position: absolute;
      left: 0;
      top: 0;
      padding: 0.25em 0.5em;
    }
    .input {
      font-size: 1em;
      line-height: 1.5em;
      padding: 0.375em 0.375em 0.375em 2em;
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-radius: 0.375em;
      border: 1px solid variables.$gray300;
      width: 100%;
    }
  }
</style>
