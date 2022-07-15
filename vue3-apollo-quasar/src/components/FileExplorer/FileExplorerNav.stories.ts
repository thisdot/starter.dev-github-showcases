import FileExplorerNav from './FileExplorerNav.vue';

export default {
  title: 'component/FileExplorer',
  component: FileExplorerNav,
  argTypes: {
    isDirectory: { type: 'boolean' },
    latestCommitMessage: { type: 'string' },
    lastUpdated: { type: 'string' },
    to: { type: 'string' },
  },
};

const Template = (args) => ({
  components: { FileExplorerNav },
  setup() {
    return { args };
  },
  template: '<FileExplorerNav v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
