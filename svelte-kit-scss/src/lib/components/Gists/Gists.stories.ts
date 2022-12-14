import Gists from './Gists.svelte';

export default {
  component: Gists,
  title: 'components/Gists',
  argTypes: {
    message: 'from Storybook',
  },
};

const Template = ({ ...args }) => ({
  Component: Gists,
  props: args,
});

export const Default = Template.bind({});
