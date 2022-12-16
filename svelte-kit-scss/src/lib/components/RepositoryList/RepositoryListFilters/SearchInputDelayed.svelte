<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let value: string | null | undefined;
  export let delay = 3000;
  const dispatch = createEventDispatcher<{ input: string | null }>();

  const dispatchFiltersChange = (newValue: string | null): void => {
    if (value !== newValue) {
      value = newValue;
      dispatch('input', newValue);
    }
  };

  let timeout: NodeJS.Timeout | undefined;
  const scheduleInputDispatch = (value: string | null): void => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
    timeout = setTimeout(() => dispatchFiltersChange(value), delay);
  };

  const handleInput = (event: Event): void => {
    const inputEvent = event as InputEvent;
    const inputElement = inputEvent.target as HTMLInputElement;
    const newValue = inputElement.value;
    scheduleInputDispatch(newValue);
  };
</script>

<input
  class="search-input-delayed"
  aria-label="Search repository"
  type="search"
  placeholder="Find a repository..."
  value={value || ''}
  on:input={handleInput}
/>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .search-input-delayed {
    font-size: 1em;
    line-height: 1.5em;
    padding: 0.375em;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-radius: 0.375em;
    border: 1px solid variables.$gray300;
    flex-grow: 1;
  }
</style>
