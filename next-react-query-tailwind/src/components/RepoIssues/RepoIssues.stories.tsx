import { Story, Meta } from '@storybook/react';
import RepoIssues from './RepoIssues.data';
import { mockRepoIssuesQuery } from './RepoIssues.mocks';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoIssues,
  title: 'RepoPage/RepoIssues',
  parameters: {
    msw: [mockRepoIssuesQuery],
  },
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

const Template: Story = () => (
  <RepoProvider
    value={{
      isRepoLoading: false,
      name: 'react',
      owner: 'facebook',
      branch: 'master',
      path: '',
      data: {
        isPrivate: false,
        stargazerCount: 178780,
        watcherCount: 6657,
        forkCount: 36235,
        openIssueCount: 660,
        openPullRequestCount: 229,
        description:
          'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        topics: [],
        isOrg: true,
      },
    }}
  >
    <RepoIssues />
  </RepoProvider>
);

export const Default = Template.bind({});
