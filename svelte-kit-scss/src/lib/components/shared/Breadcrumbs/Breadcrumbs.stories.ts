import { MOCK_BREADCRUMBS } from '$lib/helpers/mocks/repository';
import Breadcrumbs from './Breadcrumbs.svelte';

export default {
  component: Breadcrumbs,
  title: 'Home/Breadcrumbs',
  excludeStories: /.*Data$/,
};

export const Default = () => ({
  Component: Breadcrumbs,
  args: {
    breadcrumbs: MOCK_BREADCRUMBS,
  },
});
