import { RepoContext, RepoProvider } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoHeading from './RepoHeading';

export default {
  component: RepoHeading,
  title: 'RepoPage/RepoHeading',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoHeading />
  </RepoProvider>
);

export const Public = Template.bind({});
Public.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: '',
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};

export const Private = Template.bind({});
Private.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: '',
  data: {
    isPrivate: true,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};
