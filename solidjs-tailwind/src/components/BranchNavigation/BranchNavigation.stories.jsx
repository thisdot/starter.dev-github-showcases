import { Router } from '@solidjs/router';
import RepoNavigation from './BranchNavigation';

export default {
  title: 'Components/Branch Navigation',
  component: RepoNavigation,
  argTypes: {
    name: {},
    owner: {},
    branch: {},
    path: {},
  },
};

const Template = (args) => (
  <Router>
    <RepoNavigation {...args} />
  </Router>
);

export const RepoRoot = Template.bind({});
RepoRoot.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: '',
};

export const SrcPathTree = Template.bind({});
SrcPathTree.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: 'src',
};

export const DeepPathFile = Template.bind({});
DeepPathFile.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: 'solidjs-tailwind/src/components/RepoNavigation.tsx',
};
