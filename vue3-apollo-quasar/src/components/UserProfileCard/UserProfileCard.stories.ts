import { mockedUserProfileQuery } from './mockedUserProfile';
import UserProfileCard from './UserProfileCard.vue';

export default {
  title: 'Component/UserProfileCard',
  component: UserProfileCard,
  argTypes: {
    avatarUrl: {},
    name: {},
    login: {},
    bio: {},
    following: {},
    follower: {},
    organizations: {},
    location: {},
    bioLink: {},
    organization: {},
    stars: {},
  },
};

const Template = (args) => ({
  components: { UserProfileCard },
  setup() {
    return {
      args,
    };
  },
  template: '<UserProfileCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [mockedUserProfileQuery],
  },
};
Default.args = {};
