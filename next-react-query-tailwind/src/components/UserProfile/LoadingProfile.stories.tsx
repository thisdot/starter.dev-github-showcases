import { Story, Meta } from '@storybook/react';
import LoadingProfile from './LoadingProfile';

export default {
  component: LoadingProfile,
  title: 'Loading/LoadingProfile',
} as Meta;

const Template: Story = () => <LoadingProfile />;

export const Primary = Template.bind({});
