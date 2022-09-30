import LoadingTextLine from './LoadingTextLine';
import { Story, Meta } from '@storybook/react';
import React from 'react';

export default {
  component: LoadingTextLine,
  title: 'Loading/LoadingTextLine',
} as Meta;

const Template: Story = () => <LoadingTextLine />;

export const Default = Template.bind({});
