import type { RepoContext } from '../../context/RepoContext';
import { StoryFn, Meta } from '@storybook/react';
import RepoNavigation from './RepoNavigation';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: RepoNavigation,
  title: 'RepoPage/RepoNavigation',
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
    <RepoNavigation />
  </RepoProvider>
);

export const RepoRoot = {
  render: Template,

  args: {
    name: 'starter.dev',
    owner: 'thisdot',
    branch: 'main',
    path: '',
    isRepoLoading: true,
  },
};

export const SrcPathTree = {
  render: Template,

  args: {
    name: 'starter.dev',
    owner: 'thisdot',
    branch: 'main',
    path: 'src',
    isRepoLoading: true,
  },
};

export const DeepPathFile = {
  render: Template,

  args: {
    name: 'starter.dev',
    owner: 'thisdot',
    branch: 'main',
    path: 'next-react-query/src/components/RepoNavigation.tsx',
    isRepoLoading: true,
  },
};
