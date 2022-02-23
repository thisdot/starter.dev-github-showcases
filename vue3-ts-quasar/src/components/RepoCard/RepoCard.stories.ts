import RepoCard from './RepoCard.vue';

export default {
  title: 'component/RepoCard',
  component: RepoCard,
  argType: {
    repoName: {},
    visibilityTag: {},
    mainLanguage: {},
    description: {},
    lastUpdated: {},
    topics: {},
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
  repoName: 'cowrywise-unsplashed',
  visibilityTag: 'Private',
  mainLanguage: {
    color: 'yellow',
    language: 'Javascript',
  },
  description:
    'Using basic pull requests to add your name and github link to BE A MEMBER of ZTM-ng',
  topics: [
    {
      name: 'JavaScript',
      url: '',
    },
    {
      name: 'css',
      url: '',
    },
    {
      name: 'graphql-api',
      url: '',
    },
  ],
  stars: 1,
  lastUpdated: 'on 23 Sep 2020',
};
