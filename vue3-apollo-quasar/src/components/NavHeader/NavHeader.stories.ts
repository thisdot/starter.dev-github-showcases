import NavHeader from './NavHeader.vue';

export default {
  title: 'component/NavHeader',
  component: NavHeader,
  argTypes: {},
};

const Template = (args) => ({
  components: { NavHeader },
  setup() {
    return { args };
  },
  template: '<NavHeader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
