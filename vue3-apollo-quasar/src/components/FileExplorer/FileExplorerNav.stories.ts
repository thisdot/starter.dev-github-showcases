import FileExplorerNav from './FileExplorerNav.vue';
import { ExplorerContent } from './types';

export default {
  title: 'component/FileExplorer/NavItem',
  component: FileExplorerNav,
  argTypes: {
    isDirectory: { type: 'boolean' },
    name: { type: 'string' },
    latestCommitMessage: { type: 'string' },
    lastUpdated: { type: 'string' },
    to: { type: 'string' },
  },
};

const Template = (args: ExplorerContent) => ({
  components: { FileExplorerNav },
  setup() {
    return { args };
  },
  template: '<FileExplorerNav v-bind="args" />',
});

export const Folder = Template.bind({});
Folder.args = {
  isDirectory: true,
  name: 'test-directory',
  latestCommitMessage: 'Initial commit - added test directory',
  lastUpdated: '15 Jul 2022',
  to: '#test-directory',
};

export const File = Template.bind({});
File.args = {
  isDirectory: false,
  name: 'test-file',
  latestCommitMessage: 'scaffolding: added test directory',
  lastUpdated: '16 Jul 2022',
  to: '#test-file',
};
