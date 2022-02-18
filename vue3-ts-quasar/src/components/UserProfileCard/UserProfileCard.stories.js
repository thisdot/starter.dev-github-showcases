import UserProfileCard from '.';

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
  template: '<user-profile-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/28502531?v=4',
  name: 'Jerry Hogan',
  login: 'hdjerry',
  bio: 'I am a Front-End Developer with about 3 years plus of experience and with a very good knowledge of JavaScript, Vue, React, Tailwind, Styled component',
  following: 17,
  follower: 7,
  organizations: [
    {
      name: 'This Dot',
      avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
      url: '',
    },
    {
      name: 'This Dot',
      avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
      url: '',
    },
    {
      name: 'This Dot',
      avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
      url: '',
    },
    {
      name: 'This Dot',
      avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
      url: '',
    },
    {
      name: 'This Dot',
      avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
      url: '',
    },
    {
      name: 'This Dot',
      avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
      url: '',
    },
    {
      name: 'This Dot',
      avatar: 'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
      url: '',
    },
  ],
  location: 'Lagos, Nigeria',
  bioLink: 'https://music-jerryhogan.vercel.app/',
  organization: 'This Dot',
  stars: 5,
  // avatarUrl: 'https://avatars.githubusercontent.com/u/63736569?v=4',
};
