import Auth from './Auth.vue';

export default {
  title: 'Page/Auth',
  component: Auth,
  argTypes: {},
};

const Template = (args) => ({
  components: { Auth },
  setup() {
    return { args };
  },
  template: '<Auth v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
