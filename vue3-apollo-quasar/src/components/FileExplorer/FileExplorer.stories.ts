import FileExplorer from './FileExplorer.vue';

export default {
  title: 'component/FileExplorer/Explorer',
  component: FileExplorer,
  argTypes: {
    isDirectory: { type: 'boolean' },
    name: { type: 'string' },
    latestCommitMessage: { type: 'string' },
    lastUpdated: { type: 'string' },
    to: { type: 'string' },
  },
};

const Template = (args) => ({
  components: { FileExplorer },
  setup() {
    return { args };
  },
  template: '<FileExplorer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
