import IssueTabView from './IssueTabView.vue';

export default {
  title: 'component/IssueTabView',
  component: IssueTabView,
  argTypes: {},
};

const Template = (args) => ({
  components: { IssueTabView },
  setup() {
    return { args };
  },
  template: '<IssueTabView v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
