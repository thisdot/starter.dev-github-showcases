import { Story, Meta } from '@storybook/react';
import LoadingTextLine from './LoadingTextLine';

export default {
  component: LoadingTextLine,
  title: 'Loading/LoadingTextLine',
} as Meta;

const Template: Story = () => <LoadingTextLine />;

export const Default = Template.bind({});
