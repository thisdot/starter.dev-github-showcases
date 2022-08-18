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
  tabConfig: [
    { name: 'overview', icon: 'OverviewIcon', title: 'Overview' },
    {
      name: 'repositories',
      icon: 'RepositoriesIcon',
      title: 'Repositories',
      active: true,
    },
    {
      name: 'projects',
      icon: 'ProjectsIcon',
      title: 'Projects',
    },
    {
      name: 'packages',
      icon: 'PackagesIcon',
      title: 'Packages',
    },
    {
      name: 'stars',
      icon: 'StarsIcon',
      title: 'Stars',
      counter: 14,
    },
  ],
};
