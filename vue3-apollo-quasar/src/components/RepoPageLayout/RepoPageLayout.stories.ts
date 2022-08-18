import { setupGraphQL } from '@/init';
import RepoPageLayout from '.';

export default {
  title: 'component/Profile Page Layout',
  component: RepoPageLayout,
  argTypes: {},
};

const Template = (args) => ({
  components: { RepoPageLayout },
  setup() {
    setupGraphQL();
    return { args };
  },
  template: '<RepoPageLayout v-bind="args" />',
});

export const Default = Template.bind({});
