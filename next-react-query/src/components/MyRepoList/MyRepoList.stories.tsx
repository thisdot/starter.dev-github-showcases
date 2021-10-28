import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import MyRepoListView from './MyRepoList.view';

export default {
  component: MyRepoListView,
  title: 'Components/MyRepoList',
} as Meta;

const Template: Story<ComponentProps<typeof MyRepoListView>> = (args) => (
  <MyRepoListView {...args} />
);

export const NoRepos = Template.bind({});

NoRepos.args = {
  repositories: [],
};
