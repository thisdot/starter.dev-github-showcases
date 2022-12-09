import { Router } from '@solidjs/router';
import FileExplorer from './FileExplorer';
import { repositoryviewItems } from './data';

export default {
  title: 'Components/File Explorer',
  component: FileExplorer,
  argTypes: {
    items: {},
    branch: {},
    basePath: {},
    repoPath: {},
  },
};

const Template = (args) => (
  <Router>
    <FileExplorer {...args} />
  </Router>
);

export const RootDir = Template.bind({});
RootDir.args = {
  items: repositoryviewItems,
  branch: 'main',
  basePath: `/testowner/testrepos`,
  repoPath: '',
};
