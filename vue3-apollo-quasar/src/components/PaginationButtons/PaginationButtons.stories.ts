import PaginationButtons from './PaginationButtons.vue';

export default {
  title: 'component/Pagination Buttons',
  component: PaginationButtons,
  argTypes: {},
};

const Template = () => ({
  components: { PaginationButtons },
  template: '<PaginationButtons @paginate="()=>  {}" />',
});

export const Default = Template.bind({});
