import PullRequestTabView from './PullRequestTabView.vue';

export default {
  title: 'component/PullRequestTabView',
  component: PullRequestTabView,
  argTypes: {},
};

const Template = (args) => ({
  components: { PullRequestTabView },
  setup() {
    return { args };
  },
  template: '<PullRequestTabView v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
