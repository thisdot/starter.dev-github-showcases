import { RepoCard } from '@/components';
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
  components: { OrganizationPageLayout, RepoCard },
  setup() {
    return { args };
  },
  template: `
  <OrganizationPageLayout v-bind="args">
  <template #repositories="{ repo }">
    <RepoCard
        :nameWithOwner="repo.nameWithOwner"
        :name="repo.name"
        :visibility="repo.visibility"
        :description="repo.description"
        :primaryLanguage="repo.primaryLanguage"
        :stargazerCount="repo.stargazerCount"
        :forkCount="repo.forkCount"
        :updatedAt="repo.updatedAt"
        :isProfilePage="true"
      />
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
