import TabHeader from '.';

export default {
  title: 'component/Tab Header',
  component: TabHeader,
  argTypes: {
    Overview: {},
    Respositories: {},
    Projects: {},
    Packages: {},
    Stars: {},
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
  Overview: true,
  Respositories: true,
  Projects: true,
  Packages: true,
  Stars: true,
};
