import Loading from './Loading.vue';

export default {
  title: 'component/Loading',
  component: Loading,
  argTypes: {},
};

const Template = (args) => ({
  components: { Loading },
  setup() {
    return { args };
  },
  template: '<Loading v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
