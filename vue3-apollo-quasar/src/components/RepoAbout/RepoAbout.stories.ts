import RepoAbout from '.';

export default {
  title: 'component/Repo About',
  component: RepoAbout,
  argTypes: {
    description: {},
    homepageUrl: {},
    topics: [],
  },
};

const Template = (args) => ({
  components: { RepoAbout },
  setup() {
    return { args };
  },
  template: '<RepoAbout v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  description: 'A mock collection of GitHub clone implementations.',
  homepageUrl: 'https://github.com/thisdot/starter.dev-github-showcases',
  topics: ['github', 'angular', 'apollo-client', 'tailwindcss'],
};
