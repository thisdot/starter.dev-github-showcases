import Gists from './Gists.svelte';

export default {
  component: Gists,
  title: 'Home/Gists',
  excludeStories: /.*Data$/,
};

export const Default = () => ({
  Component: Gists,
  args: {
    gists: gistsFixture,
  },
});

export const Empty = () => ({
  Component: Gists,
  args: {
    gists: [],
  },
});
