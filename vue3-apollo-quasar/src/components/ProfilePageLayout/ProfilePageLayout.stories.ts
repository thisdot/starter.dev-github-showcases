import { setupGraphQL } from '@/init';
import ProfilePageLayout from '.';

export default {
  title: 'component/Profile Page Layout',
  component: ProfilePageLayout,
  argTypes: {},
};

const Template = (args) => ({
  components: { ProfilePageLayout },
  setup() {
    setupGraphQL();
    return { args };
  },
  template: '<ProfilePageLayout v-bind="args" />',
});

export const Default = Template.bind({});
