<script lang="ts">
  import DropdownMenuSelect from '$lib/components/shared/Dropdown/DropdownMenuSelect/DropdownMenuSelect.svelte';
  import DropdownFilterTextButton from './DropdownFilterTextButton.svelte';

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
  const handleFilterSelect = ({ detail }: CustomEvent<SomeOption>) => {
    console.log(detail);
  };
</script>

<div class="issue-search-controls">
  <DropdownMenuSelect
    description="Sort by"
    {options}
    labelAccessor={(x) => x.label}
    checkedPredicate={() => true}
    on:select={handleFilterSelect}
  >
    <DropdownFilterTextButton text="Sort" />
  </DropdownMenuSelect>
</div>

<style lang="scss">
</style>
