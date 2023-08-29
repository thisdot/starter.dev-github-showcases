import { PULL_REQUESTS } from './data';
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
Default.args = {
  openPullRequests: {
    pullRequests: PULL_REQUESTS.openPullRequest,
    totalCount: 20,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  closedPullRequests: {
    pullRequests: PULL_REQUESTS.closedPullRequest,
    totalCount: 20,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
};
