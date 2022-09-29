import { mockedOrgProfileQuery, mockedOrgRepoQuery } from './mockedOrgProfile';
import OrganizationPageLayout from './OrganizationPageLayout.vue';

export default {
  title: 'component/Organization Page Layout',
  component: OrganizationPageLayout,
  argTypes: {
    username: {},
  },
};

const Template = (args) => ({
  components: { OrganizationPageLayout },
  setup() {
    return { args };
  },
  template: `
  <OrganizationPageLayout v-bind="args">
  <template #repositories>
    Repositories data here
  </template>
  </OrganizationPageLayout>
  `,
});

export const Default = Template.bind({});
Default.args = {
  username: 'thisdot',
};
Default.parameters = {
  msw: {
    handlers: [mockedOrgProfileQuery, mockedOrgRepoQuery],
  },
};
