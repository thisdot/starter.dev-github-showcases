import SearchInput from './SearchInput.vue';

export default {
  title: 'component/SearchInput',
  component: SearchInput,
  argTypes: {},
};

const Template = (args) => ({
  components: { SearchInput },
  setup() {
    return { args };
  },
  template: '<SearchInput v-bind="args" />',
});

export const Default = Template.bind({});
