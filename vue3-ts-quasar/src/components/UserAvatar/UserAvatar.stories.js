import UserAvatar from './UserAvatar.vue';

export default {
  title: 'component/UserAvatar',
  component: UserAvatar,
  argTypes: {
    unit: {
      control: { type: 'radio' },
      options: ['px', 'rem', 'em', '%', 'vh', 'vw'],
    },
  },
};

const Template = (args) => ({
  components: { UserAvatar },
  setup() {
    return { args };
  },
  template: '<UserAvatar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  size: 4,
  unit: 'rem',
};
