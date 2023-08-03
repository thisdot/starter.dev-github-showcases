import PaginationButtons from './PaginationButtons.vue';

export default {
  title: 'component/Pagination Buttons',
  component: PaginationButtons,
  argTypes: {
    isPrevActive: {
      control: {
        type: 'boolean',
      },
    },
    isNextActive: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => ({
  components: { PaginationButtons },
  setup() {
    return { args };
  },
  template: '<PaginationButtons v-bind="args" @paginate="()=>  {}" />',
});

export const Default = Template.bind({});
Default.args = {
  isPrevActive: false,
  isNextActive: true,
};
