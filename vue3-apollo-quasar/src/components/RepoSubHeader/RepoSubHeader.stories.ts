import RepoSubHeader from './RepoSubHeader.vue';

export default {
  title: 'component/RepoSubHeader',
  component: RepoSubHeader,
  argType: {
    username: {},
    repoName: {},
    visibilityTag: {},
    stars: {},
    watch: {},
    forks: {},
    issuesCount: {},
    pullRequestsCount: {},
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { RepoSubHeader },
  setup() {
    return { args };
  },
  template: '<RepoSubHeader v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  username: 'thisdot',
  repoName: 'starter.dev-github-showcases',
  visibilityTag: 'Public',
  stars: 100,
  watch: 30,
  forks: 1,
  issuesCount: 10,
  pullRequestsCount: 10,
};
