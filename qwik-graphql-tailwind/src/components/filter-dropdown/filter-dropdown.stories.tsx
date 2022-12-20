import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Meta } from '@storybook/html';
import { storybookMockRouting } from '../../utils';
import { FilterDropdown, FilterDropdownProps } from './filter-dropdown';

const FilterDropdownDemoComponent = component$((props: FilterDropdownProps) => {
  useStylesScoped$(`
    .container {
      margin-left: 200px;
    }`);
  storybookMockRouting();
  return (
    <div class="container">
      <FilterDropdown {...props} />
    </div>
  );
});

export default {
  title: 'Filter Dropdown',
} as Meta;

const Template = (args: FilterDropdownProps) => <FilterDropdownDemoComponent {...args} />;

export const Demo: any = Template.bind({});

Demo.args = {
  name: 'Filter Issues',
  description: 'Filter by',
  current: 'All',
  items: [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'Open',
      value: 'open',
    },
    {
      label: 'Closed',
      value: 'closed',
    },
  ],
  buttonClassName: '',
};
