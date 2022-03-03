import { RepoContext, RepoProvider } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoActionButtons from './RepoActionButtons';

export default {
  component: RepoActionButtons,
  title: 'RepoPage/RepoActionButtons',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoActionButtons />
  </RepoProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: false,
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

export const BigNumbers = Template.bind({});
BigNumbers.args = {
  name: 'react',
  owner: 'facebook',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 178350,
    forkCount: 36801,
    watcherCount: 6321,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};
