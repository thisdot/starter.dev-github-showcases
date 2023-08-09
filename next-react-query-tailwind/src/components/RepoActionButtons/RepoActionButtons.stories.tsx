import type { RepoContext } from '../../context/RepoContext';
import { StoryFn, Meta } from '@storybook/react';
import RepoActionButtons from './RepoActionButtons';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoActionButtons,
  title: 'RepoPage/RepoActionButtons',
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
  parameters: {
    nextRouter: {
      path: '[owner]/[name]',
      asPath: 'thisdot/starter.dev',
      query: {},
    },
  },
} as Meta;

const Template: StoryFn<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoActionButtons />
  </RepoProvider>
);

export const Default = {
  render: Template,

  args: {
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
  },
};

export const BigNumbers = {
  render: Template,
};

export const Loading = {
  render: Template,

  args: {
    name: 'starter.dev',
    owner: 'thisdot',
    isRepoLoading: true,
  },
};
