import type { RepoContext } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import FileExplorerNav from './FileExplorerNav';
import { createWrapper } from '@lib/testUtils';
import { RepoProvider } from '@context/RepoContext';

export default {
  component: FileExplorerNav,
  title: 'RepoPage/FileExplorerNav',
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
      path: '[owner]/[name]',
      asPath: 'thisdot/starter.dev',
      query: {},
    },
  },
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <FileExplorerNav />
  </RepoProvider>
);

export const RepoRoot = Template.bind({});
RepoRoot.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: '',
  isRepoLoading: true,
};

export const SrcPathTree = Template.bind({});
SrcPathTree.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: 'src',
  isRepoLoading: true,
};

export const DeepPathFile = Template.bind({});
DeepPathFile.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: 'next-react-query/src/components/FileExplorerNav.tsx',
  isRepoLoading: true,
};
