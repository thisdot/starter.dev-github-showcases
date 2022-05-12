import RepoCard from './RepoCard.vue';

export default {
  title: 'component/RepoCard',
  component: RepoCard,
  argType: {
    name: {},
    visibilityTag: {},
    mainLanguage: {},
    description: {},
    lastUpdated: {},
    stars: {},
  },
};

const Template = (args) => ({
  components: { RepoCard },
  setup() {
    return { args };
  },
  template: '<RepoCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: 'cowrywise-unsplashed',
  visibility: 'Private',
  primaryLanguage: {
    color: 'yellow',
    name: 'Javascript',
  },
  description:
    'Using basic pull requests to add your name and github link to BE A MEMBER of ZTM-ng',
  stargazerCount: 1,
  updatedAt: '23 Sep 2020',
};
