import type { RepoContext } from '../../context/RepoContext';
import { StoryFn, Meta } from '@storybook/react';
import RepoReadMe from './RepoReadMe.data';
import { mockRepoReadMeQuery } from './RepoReadMe.mocks';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoReadMe,
  title: 'RepoPage/RepoReadMe',
  parameters: {
    msw: [mockRepoReadMeQuery],
  },
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
    <RepoReadMe />
  </RepoProvider>
);

export const NoReadMe = {
  render: Template,

  args: {
    name: 'noreadme',
    owner: 'testowner',
    branch: 'main',
    path: '',
  },
};

export const HasReadMe = {
  render: Template,

  args: {
    name: 'react',
    owner: 'facebook',
    branch: 'main',
    path: '/',
  },
};
