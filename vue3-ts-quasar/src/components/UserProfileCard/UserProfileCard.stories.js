import UserProfileCard from '.';

export default {
  title: 'Component/UserProfileCard',
  component: UserProfileCard,
  argTypes: {},
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
