import { Story, Meta } from '@storybook/react';
import LoadingPulseDots from './LoadingPulseDots';

export default {
  component: LoadingPulseDots,
  title: 'Loading/LoadingPulseDots',
} as Meta;

const Template: Story = () => <LoadingPulseDots />;

export const Default = Template.bind({});
