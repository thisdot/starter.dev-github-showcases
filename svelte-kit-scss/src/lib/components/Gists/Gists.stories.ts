import Gists from './Gists.svelte';

export default {
  component: Gists,
  title: 'Home/Gists',
  excludeStories: /.*Data$/,
  argTypes: {
    message: 'from Storybook',
  },
};

const Template = ({ ...args }) => ({
  Component: Gists,
  props: args,
});

export const Default = Template.bind({});
