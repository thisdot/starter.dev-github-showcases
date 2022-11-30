import Footer from './Footer.vue';

export default {
  title: 'component/Footer',
  component: Footer,
  argTypes: {},
};

const Template = (args) => ({
  components: { Footer },
  setup() {
    return { args };
  },
  template: '<Footer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

