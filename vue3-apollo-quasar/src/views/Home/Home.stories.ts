import Home from './Home.vue';

export default {
  title: 'page/Home',
  component: Home,
  argTypes: {
    dark: { type: 'boolean' },
    size: { type: 'number' },
    darkImg: { type: 'string' },
    darkLgImg: { type: 'string' },
    lightLgImg: { type: 'string' },
    lightImg: { type: 'string' },
  },
};

const Template = (args) => ({
  components: { Home },
  setup() {
    return { args };
  },
  template: '<Home v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
