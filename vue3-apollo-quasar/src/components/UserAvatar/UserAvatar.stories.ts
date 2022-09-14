import UserAvatar from './UserAvatar.vue';

export default {
  title: 'component/UserAvatar',
  component: UserAvatar,
  argTypes: {
    size: { type: 'number' },
    unit: {
      control: { type: 'radio' },
      options: ['px', 'rem', 'em', '%', 'vh', 'vw'],
    },
    img: {},
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
  img: 'https://avatars.githubusercontent.com/u/28502531?v=4',
};
