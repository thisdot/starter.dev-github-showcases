import { Story, Meta } from '@storybook/react';
import { RepoContext, RepoProvider } from '~/context/RepoContext';
import RepoAboutWidget from './RepoAboutWidget';

export default {
  component: RepoAboutWidget,
  title: 'RepoPage/RepoAboutWidget',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoAboutWidget />
  </RepoProvider>
);

export const WithDescription = Template.bind({});
WithDescription.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    description:
      'Demo app for JSMarathon presentation: React Native E2E Testing with Detox',
    homepageUrl: 'www.youtube.com/watch?v=vm085szsz_m',
    openIssueCount: 8,
    openPullRequestCount: 3,
    topics: ['react-native', 'pizza', 'e2e-tests', 'detox', 'jsmarathon'],
    isOrg: true,
  },
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 8,
    openPullRequestCount: 3,
    topics: [],
    isOrg: true,
  },
};
