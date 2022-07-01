import IssuesPullRequestsCard from './IssuesPullRequestsCard.vue';

export default {
  title: 'component/IssuesPullRequestsCard',
  component: IssuesPullRequestsCard,
  argTypes: {},
};

const Template = (args) => ({
  components: { IssuesPullRequestsCard },
  setup() {
    return { args };
  },
  template: '<IssuesPullRequestsCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
