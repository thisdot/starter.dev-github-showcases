import IssuePullRequestTab from './IssuePullRequestTab.vue';
import { TAB_TYPE } from './data';

export default {
  title: 'component/Issue Pull Request Tab',
  component: IssuePullRequestTab,
  argTypes: {
    openCounts: {},
    closedCounts: {},
    tabType: {
      control: {
        type: 'select',
        options: Object.values(TAB_TYPE),
      },
    },
  },
};

const Template = (args) => ({
  components: { IssuePullRequestTab },
  setup() {
    return { args };
  },
  template: '<IssuePullRequestTab v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  openCounts: 16,
  closedCounts: 196,
  tabType: 'pullrequest',
};
