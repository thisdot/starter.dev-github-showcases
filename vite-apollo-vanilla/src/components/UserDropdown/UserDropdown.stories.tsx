import { sprinkles } from '@lib/css/sprinkles.css';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import UserDropdown from './';

export default {
  component: UserDropdown,
  title: 'components/UserDropdown',
} as Meta;

const Template: Story<React.ComponentProps<typeof UserDropdown>> = (args) => (
  <div className={sprinkles({ background: 'gray900' })}>
    <UserDropdown {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  image: 'https://avatars2.githubusercontent.com/u/17098?v=4',
  username: 'danecando',
};
