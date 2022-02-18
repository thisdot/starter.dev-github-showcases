import Logo from './Logo.vue';

export default {
  title: 'component/Logo',
  component: Logo,
  argTypes: {},
};

const Template = (args) => ({
  components: { Logo },
  setup() {
    return { args };
  },
  template: '<Logo v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  dark: false,
  size: 32,
  darkImg: '/logos/gh-logo-dark-bg.svg',
  darkLgImg: '/logos/gh-logo-lg-dark-bg.svg',
  lightLgImg: '/logos/gh-logo-lg-light-bg.svg',
  lightImg: '/logos/gh-logo-light-bg.svg',
};
