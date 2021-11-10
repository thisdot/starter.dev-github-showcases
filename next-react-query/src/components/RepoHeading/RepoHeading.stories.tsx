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

export const HeadingPublic = Template.bind({});
HeadingPublic.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
  },
};

export const HeadingPrivate = Template.bind({});
HeadingPrivate.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  data: {
    isPrivate: true,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
  },
};

export const HeadingLoading = Template.bind({});
HeadingLoading.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: true,
  data: undefined,
};
