import { Story, Meta } from '@storybook/react';
import LoadingRepos from './LoadingRepos';

export default {
  component: LoadingRepos,
  title: 'Loading/LoadingRepos',
} as Meta;

const Template: Story = () => <LoadingRepos />;

export const Primary = Template.bind({});
