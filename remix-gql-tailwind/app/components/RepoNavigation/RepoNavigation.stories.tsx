import { RepoContext, RepoProvider } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoNavigation from './RepoNavigation';

export default {
  component: RepoNavigation,
  title: 'RepoPage/RepoNavigation',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoNavigation />
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
  path: 'remix/src/components/RepoNavigation.tsx',
  isRepoLoading: true,
};
