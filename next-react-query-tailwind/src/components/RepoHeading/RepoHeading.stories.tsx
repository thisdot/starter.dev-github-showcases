import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoHeading from './RepoHeading';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoHeading,
  title: 'RepoPage/RepoHeading',
  decorators: [
    (Story: Story) => {
      const Wrapper = createWrapper();
      return (
        <Wrapper>
          <Story />
        </Wrapper>
      );
    },
  ],
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

export const Loading = Template.bind({});
Loading.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: true,
  data: undefined,
};
