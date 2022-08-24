import FileExplorer from './FileExplorer.vue';
import FileExplorerNav from './FileExplorerNav.vue';
import { ExplorerContent } from './types';

export default {
  title: 'component/FileExplorer/Explorer',
  component: FileExplorer,
  argTypes: {
    contentList: {},
  },
};

const Template = (args: ExplorerContent[]) => ({
  components: { FileExplorer, FileExplorerNav },
  setup() {
    return { args };
  },
  template: '<FileExplorer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
