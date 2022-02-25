import OrganizationPageLayout from '.';

export default {
  title: 'component/Organization Page Layout',
  component: OrganizationPageLayout,
  argTypes: {},
};

const Template = (args) => ({
  components: { OrganizationPageLayout },
  setup() {
    return { args };
  },
  template: '<OrganizationPageLayout v-bind="args" />',
});

export const Default = Template.bind({});
