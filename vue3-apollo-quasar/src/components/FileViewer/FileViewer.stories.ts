import FileViewer from './FileViewer.vue';

export default {
  title: 'component/FileViewer',
  component: FileViewer,
  argTypes: {},
};

const Template = (args) => ({
  components: { FileViewer },
  setup() {
    return { args };
  },
  template: '<FileViewer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
