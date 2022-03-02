import EmptyContainer from './EmptyContainer.vue';

export default {
  title: 'component/EmptyContainer',
  component: EmptyContainer,
  argTypes: {
    imageUrl: { type: 'string' },
    opacity: { type: 'string' },
    alt: { type: 'string' },
  },
};

const Template = (args) => ({
  components: { EmptyContainer },
  setup() {
    return { args };
  },
  template: '<EmptyContainer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  imageUrl: '/logos/gh-logo-dark-bg.svg',
  opacity: '1.0',
  alt: 'Github Octopuss',
};
