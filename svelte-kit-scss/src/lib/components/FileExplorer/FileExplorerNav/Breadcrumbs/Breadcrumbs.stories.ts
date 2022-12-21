import Breadcrumbs from './Breadcrumbs.svelte';

export default {
  component: Breadcrumbs,
  title: 'Home/Breadcrumbs',
  excludeStories: /.*Data$/,
  argTypes: {
    breadcrumbData: {
      breadcrumbs: [
        {
          name: 'svelte-kit-scss',
          href: '/thisdot/starter.dev-github-showcases/tree/main/svelte-kit-scss',
        },
      ],
      username: 'thisdot',
      repo: 'starter.dev-github-showcases',
    },
  },
};

const Template = ({ ...args }) => ({
  Component: Breadcrumbs,
  props: args,
});

export const Default = Template.bind({});
