import SearchFilter from './SearchFilter.vue';

export default {
  title: 'component/Search Filter',
  component: SearchFilter,
  argTypes: {},
};

const Template = (args) => ({
  components: { SearchFilter },
  setup() {
    return { args };
  },
  template: '<SearchFilter v-bind="args" />',
});
export const Default = Template.bind({});
