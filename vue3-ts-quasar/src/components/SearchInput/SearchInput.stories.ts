import SearchInput from '.';

export default {
  title: 'component/Search Input',
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
