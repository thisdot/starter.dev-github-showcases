import Breadcrumbs from './Breadcrumbs.svelte';

export default {
  component: Breadcrumbs,
  title: 'Home/Breadcrumbs',
  excludeStories: /.*Data$/,
  argTypes: {
    breadcrumbs: [
      {
        emphasis: true,
        href: '/thisdot/starter.dev-github-showcases',
        name: 'starter.dev-github-showcases',
      },
      {
        emphasis: true,
        href: undefined,
        name: 'svelte-kit-scss',
      },
    ],
  },
};

const Template = ({ ...args }) => ({
  Component: Breadcrumbs,
  props: args,
});

export const Default = Template.bind({});
