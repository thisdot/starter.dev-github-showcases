import { Meta } from '@storybook/html';
import { SearchInput, SearchInputProps } from './search-input';

export default {
  title: 'Search Input',
} as Meta;

const Template = (args: SearchInputProps) => <SearchInput {...args} />;

export const Demo: any = Template.bind({});

Demo.args = {
  className: '',
  placeholder: 'Search something here!',
};
