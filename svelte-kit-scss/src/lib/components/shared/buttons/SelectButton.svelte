<script lang="ts">
  import ButtonText from '$lib/components/shared/buttons/ButtonText.svelte';
  import { createEventDispatcher } from 'svelte';

  type TOption = $$Generic;
  export let options: TOption[];
  export let labelAccessor = (option: TOption) => String(option);
  export let checkedPredicate: (option: TOption) => boolean = () => false;

  const dispatch = createEventDispatcher<{ select: TOption }>();

  const handleOptionClick = (option: TOption): void => {
    dispatch('select', option);
  };

  $: console.log($$slots);
</script>

<div class="select-button">
  {#each options as option}
    <div
      class="button-wrapper"
      class:active={checkedPredicate(option)}
      on:click={() => handleOptionClick(option)}
      on:keypress={() => handleOptionClick(option)}
    >
      <ButtonText text={labelAccessor(option)}>
        <svelte:fragment slot="left">
          <slot name="option-icon-left" {option} />
        </svelte:fragment>
        <svelte:fragment slot="right">
          <slot name="option-icon-right" {option} />
        </svelte:fragment>
      </ButtonText>
    </div>
  {/each}
</div>

<style lang="scss">
  .select-button {
    display: flex;
    gap: 1em;
    .button-wrapper {
      &.active {
        font-weight: 600;
      }
    }
  }
</style>
