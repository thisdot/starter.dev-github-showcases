import { Story, Meta } from '@storybook/react';
import { ComponentProps } from 'react';
import NavBar from './NavBar';

export default {
  component: NavBar,
  title: 'Components/NavBar',
} as Meta;

const Template: Story<ComponentProps<typeof NavBar>> = (args) => (
  <NavBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    avatarUrl: 'https://avatars2.githubusercontent.com/u/17098?v=4',
    login: 'danecando',
  },
};
