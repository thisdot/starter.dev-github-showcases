import IssuesPullRequestsCard from './IssuesPullRequestsCard.vue';
import { CARD_TYPES, STATES } from './data';

export default {
  title: 'component/IssuesPullRequestsCard',
  component: IssuesPullRequestsCard,
  argTypes: {
    cardType: {
      control: {
        type: 'select',
        options: Object.values(CARD_TYPES),
      },
    },
    state: {
      control: {
        type: 'select',
        options: Object.values(STATES),
      },
    },
    author: {},
    title: {},
    url: {},
    commentCount: {},
    number: {},
    createdAt: {},
  },
};

const Template = (args) => ({
  components: { IssuesPullRequestsCard },
  setup() {
    return { args };
  },
  template: '<IssuesPullRequestsCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  cardType: 'issue',
  state: 'open',
  author: 'AllanJeremy',
  title: 'Save the last dance',
  url: '#',
  commentCount: 3,
  number: 121,
  createdAt: new Date(),
};
