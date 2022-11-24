<script lang="ts">
  import DropdownMenu from '../DropdownMenu.svelte';
  import DropdownMenuItemLayout from '../DropdownMenuItemLayout.svelte';
  import DropdownItemTemplateCheckbox from '../item-templates/DropdownItemTemplateCheckbox.svelte';
  export let description: string | undefined;

  type TOption = $$Generic;
  export let options: TOption[];
  export let labelAccessor = (option: TOption) => String(option);
  export let checkedPredicate: (option: TOption) => boolean = () => false;
</script>

<DropdownMenu {description}>
  <slot />
  <div slot="content">
    {#each options as option}
      <DropdownMenuItemLayout>
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
