import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoHeader from './RepoHeader';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoHeader,
  title: 'RepoPage/RepoHeader',
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

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoHeader />
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

export const Loading = Template.bind({});
Loading.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: true,
};
