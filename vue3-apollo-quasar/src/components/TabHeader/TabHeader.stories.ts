import TabHeader from '.';

export default {
  title: 'component/Tab Header',
  component: TabHeader,
  argTypes: {
    overview: {},
    repositories: {},
    projects: {},
    packages: {},
    stars: {},
  },
};

const Template = (args) => ({
  components: { TabHeader },
  setup() {
    return { args };
  },
  template: '<TabHeader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  overview: true,
  repositories: true,
  projects: true,
  packages: true,
  stars: true,
};
