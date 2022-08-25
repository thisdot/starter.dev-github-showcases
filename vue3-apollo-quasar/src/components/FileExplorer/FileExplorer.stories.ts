import FileExplorer from './FileExplorer.vue';
import FileExplorerNav from './FileExplorerNav.vue';
import { ExplorerContent, Templates } from './types';

export default {
  title: 'component/FileExplorer/Explorer',
  component: FileExplorer,
  argTypes: {
    contentList: {},
  },
};

const Template: Templates = (args: ExplorerContent[]) => ({
  components: { FileExplorer, FileExplorerNav },
  setup(): { args: ExplorerContent[] } {
    return { args };
  },
  template: '<FileExplorer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
