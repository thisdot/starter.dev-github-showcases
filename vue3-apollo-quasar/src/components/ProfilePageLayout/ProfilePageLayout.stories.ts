import { RepoCard } from '@/components';
import { mockedUserProfileQuery } from '../UserProfileCard/mockedUserProfile';
import { mockedProfileRepoQuery } from './mockProfilePageRepo';
import ProfilePageLayout from './ProfilePageLayout.vue';

export default {
  title: 'component/Profile Page Layout',
  component: ProfilePageLayout,
  argTypes: {
    username: {},
  },
};

const Template = (args) => ({
  components: { ProfilePageLayout, RepoCard },
  setup() {
    return { args };
  },
  template: `
  <ProfilePageLayout v-bind="args">
    <template #repositories="{ repo }">
      <RepoCard
        :name="repo.name"
        :visibility="repo.visibility"
        :description="repo.description"
        :primaryLanguage="repo.primaryLanguage"
        :stargazerCount="repo.stargazerCount"
        :forkCount="repo.forkCount"
        :updatedAt="repo.updatedAt"
      />
    </template>
  </ProfilePageLayout>
  `,
});

export const Default = Template.bind({});
Default.args = {
  username: 'hdjerry',
};
Default.parameters = {
  msw: {
    handlers: [mockedProfileRepoQuery, mockedUserProfileQuery],
  },
};
