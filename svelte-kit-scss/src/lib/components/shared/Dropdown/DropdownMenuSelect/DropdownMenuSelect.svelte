<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import DropdownMenu from '../DropdownMenu.svelte';
  import DropdownMenuItemLayout from '../DropdownMenuItemLayout.svelte';
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
</script>

<DropdownMenu {description}>
  <slot />
  <div slot="content">
    {#each options as option}
      <DropdownMenuItemLayout
        on:click={() => handleOptionClick(option)}
        on:keypress={() => handleOptionClick(option)}
      >
        {#if $$slots.option}
          <slot name="option" {option} {checkedPredicate} {labelAccessor} />
        {:else}
          <DropdownItemTemplateCheckbox
            label={labelAccessor(option)}
            checked={checkedPredicate(option)}
          />
        {/if}
      </DropdownMenuItemLayout>
    {/each}
  </div>
</DropdownMenu>

<style lang="scss">
</style>
