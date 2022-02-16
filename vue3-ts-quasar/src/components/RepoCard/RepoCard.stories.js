import RepoCard from '.';

export default {
  title: 'component/RepoCard',
  component: RepoCard,
  argType: {
    repoName: {},
    visibilityTag: {},
    mainLanguage: {},
    description: {},
    lastUpdated: {},
  },
};

const Template = (args) => ({
  components: { RepoCard },
  setup() {
    return { args };
  },
  template: '<repo-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  repoName: 'cowrywise-unsplashed',
  visibilityTag: 'Private',
  mainLanguage: {
    color: 'red',
    language: 'Javascript',
  },
  description:
    'Using basic pull requests to add your name and github link to BE A MEMBER of ZTM-ng',
  lastUpdated: 'on 23 Sep 2020',
};
