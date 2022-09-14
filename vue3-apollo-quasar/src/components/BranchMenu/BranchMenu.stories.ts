import BranchMenu from './BranchMenu.vue';

export default {
  title: 'component/BranchMenu',
  component: BranchMenu,
  argTypes: {
    branches: {},
  },
};

const Template = (args) => ({
  components: { BranchMenu },
  setup() {
    return { args };
  },
  template: '<BranchMenu v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  branches: [
    { name: 'main', default: true },
    { name: 'Alpha', default: false },
    { name: 'Omega', default: false },
    { name: 'Trenches', default: false },
  ],
};
