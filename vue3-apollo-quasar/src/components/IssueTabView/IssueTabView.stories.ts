import { ISSUES } from './data';
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
Default.args = {
  openIssues: {
    pullRequests: ISSUES.openIssue,
    totalCount: 20,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  closedIssues: {
    pullRequests: ISSUES.closedIssue,
    totalCount: 20,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
};
