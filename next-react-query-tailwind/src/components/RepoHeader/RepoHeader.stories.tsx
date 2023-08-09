import type { RepoContext } from '../../context/RepoContext';
import { StoryFn, Meta } from '@storybook/react';
import RepoHeader from './RepoHeader';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoHeader,
  title: 'RepoPage/RepoHeader',
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
      path: '/[owner]/[name]',
      asPath: '/thisdot/starter.dev',
      query: {
        owner: 'thisdot',
        name: 'starter.dev',
      },
    },
  },
} as Meta;

const Template: StoryFn<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoHeader />
  </RepoProvider>
);

export const Default = {
  render: Template,

  args: {
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
  },
};

export const Loading = {
  render: Template,

  args: {
    name: 'starter.dev',
    owner: 'thisdot',
    isRepoLoading: true,
  },
};
