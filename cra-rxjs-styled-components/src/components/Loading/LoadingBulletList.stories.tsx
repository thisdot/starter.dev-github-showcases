import LoadingBulletList from './LoadingBulletList';
import { Story, Meta } from '@storybook/react';
import React from 'react';

export default {
  component: LoadingBulletList,
  title: 'Loading/LoadingBulletList',
} as Meta;

const Template: Story = () => <LoadingBulletList />;

export const Default = Template.bind({});
