import UserProfileCard from '.';

export default {
  title: 'Component/UserProfileCard',
  component: UserProfileCard,
  argTypes: {
    avatarUrl: {},
    name: {},
    login: {},
    bio: {},
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
  // avatarUrl: 'https://avatars.githubusercontent.com/u/63736569?v=4',
};
