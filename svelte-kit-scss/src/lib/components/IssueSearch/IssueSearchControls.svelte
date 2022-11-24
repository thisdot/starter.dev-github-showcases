<script lang="ts">
  import { ChevronDown16 } from 'svelte-octicons';
  import ButtonText from '../shared/buttons/ButtonText.svelte';
  import DropdownMenuSelect from '$lib/components/shared/Dropdown/DropdownMenuSelect/DropdownMenuSelect.svelte';

  type SomeOption = {
    label: string;
    value?: number;
  };
  let options: SomeOption[] = [
    {
      label: 'One asdasdsadasdsadsd',
      value: 1,
    },
    {
      label: 'Two',
      value: 2,
    },
    {
      label: 'None',
    },
  ];
</script>

<div class="issue-search-controls">
  <DropdownMenuSelect
    description="Sort by"
    {options}
    labelAccessor={(x) => x.label}
    checkedPredicate={() => true}
  >
    <ButtonText text="Sort">
      <ChevronDown16 slot="right" />
    </ButtonText>
  </DropdownMenuSelect>
</div>

<style lang="scss">
</style>
