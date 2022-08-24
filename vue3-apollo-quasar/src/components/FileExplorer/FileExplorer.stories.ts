import FileExplorer from './FileExplorer.vue';
import FileExplorerNav from './FileExplorerNav.vue';

export default {
  title: 'component/FileExplorer/Explorer',
  component: FileExplorer,
  argTypes: {
    contentList: {},
  },
};

type ArgType = {
  isDirectory: boolean;
  name: string;
  latestCommitMessage: string;
  lastUpdated: string;
  to: string;
};

const Template = (args: ArgType[]) => ({
  components: { FileExplorer, FileExplorerNav },
  setup() {
    return { args };
  },
  template: '<FileExplorer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
