import type { RepoContext } from '../../context/RepoContext';
import { StoryFn, Meta } from '@storybook/react';
import RepoHeading from './RepoHeading';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoHeading,
  title: 'RepoPage/RepoHeading',
  decorators: [
    (Story: StoryFn) => {
      const Wrapper = createWrapper();
      return (
        <Wrapper>
          <Story />
        </Wrapper>
      );
    },
  ],
} as Meta;

const Template: StoryFn<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoHeading />
  </RepoProvider>
);

export const Public = {
  render: Template,

  args: {
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
  },
};

export const Private = {
  render: Template,

  args: {
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
  },
};

export const Loading = {
  render: Template,

  args: {
    name: 'starter.dev',
    owner: 'thisdot',
    isRepoLoading: true,
    data: undefined,
  },
};
