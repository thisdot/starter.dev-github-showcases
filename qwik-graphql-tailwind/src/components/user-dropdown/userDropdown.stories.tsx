import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Meta } from '@storybook/html';
import { storybookMockRouting } from '../../utils';
import { UserDropdown, UserDropdownProps } from './userDropdown';

const UserDropdownDemoComponent = component$(({ image, username }: UserDropdownProps) => {
  useStylesScoped$(`
    .container {
      margin-left: 200px;
    }`);
  storybookMockRouting();
  return (
    <div class="container">
      <UserDropdown image={image} username={username} />
    </div>
  );
});

export default {
  title: 'User Dropdown',
} as Meta;

const Template = (args: UserDropdownProps) => (
  <div class="w-fit bg-gray-900 p-4">
    <UserDropdownDemoComponent image={args.image} username={args.username} />
  </div>
);

export const Demo: any = Template.bind({
  image: '',
  username: '',
});

Demo.args = {
  image: 'https://avatars.githubusercontent.com/u/22839396?s=200&v=4',
  username: 'thisdot',
};
