import SearchDropdowns from './SearchDropdowns.vue';

export default {
  title: 'component/Search Dropdowns',
  component: SearchDropdowns,
  argTypes: {
    dropdownType: {},
  },
};

const Template = (args) => ({
  components: { SearchDropdowns },
  setup() {
    return { args };
  },
  template: '<SearchDropdowns v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  dropdownType: 'language',
};
