<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import DropdownMenu from '../DropdownMenu.svelte';
  import DropdownItemTemplateCheckbox from '../item-templates/DropdownItemTemplateCheckbox.svelte';
  export let description: string | undefined;

  type TOption = $$Generic;
  export let options: TOption[];
  export let labelAccessor = (option: TOption) => String(option);
  export let checkedPredicate: (option: TOption) => boolean = () => false;

  const dispatch = createEventDispatcher<{ select: TOption }>();

  const handleOptionClick = (option: TOption): void => {
    dispatch('select', option);
  };
  type Direction = 'left' | 'right';
  export let direction: Direction = 'right';
</script>

<DropdownMenu {description} {direction}>
  <slot />
  <div slot="content" role="listbox">
    {#each options as option}
      <div
        class="dropdown-menu-item-layout"
        on:click={() => handleOptionClick(option)}
        on:keypress={() => handleOptionClick(option)}
      >
        {#if $$slots.option}
          <slot
            aria-selected
            role="option"
            name="option"
            {option}
            {checkedPredicate}
            {labelAccessor}
          />
        {:else}
          <DropdownItemTemplateCheckbox
            label={labelAccessor(option)}
            checked={checkedPredicate(option)}
          />
        {/if}
      </div>
    {/each}
  </div>
</DropdownMenu>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .dropdown-menu-item-layout {
    border-bottom: 1px solid variables.$gray300;
    padding: 0.75em 1.25em;
    cursor: pointer;
    &:hover {
      background: variables.$gray100;
    }
    &:last-child {
      border-bottom: none;
    }
  }
</style>
