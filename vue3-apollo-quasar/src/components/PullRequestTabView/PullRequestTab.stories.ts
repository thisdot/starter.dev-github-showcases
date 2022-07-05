import PullRequestTab from './PullRequestTab.vue';

export default {
  title: 'component/Pull Request Tab',
  component: PullRequestTab,
  argType: {
    openCounts: {},
    closedCounts: {},
  },
};

const Template = (args) => ({
  components: { PullRequestTab },
  setup() {
    return { args };
  },
  template: '<PullRequestTab v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  openCounts: 0,
  closedCounts: 0,
};
