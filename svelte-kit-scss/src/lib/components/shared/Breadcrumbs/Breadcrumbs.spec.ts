import { render } from '@testing-library/svelte';
import Breadcrumbs from './Breadcrumbs.svelte';

describe('Breadcrumbs Component', () => {
  it('should render breadcrumb accurately', () => {
    const { container } = render(Breadcrumbs, {
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
    });

    const breadcrumbs = container.getElementsByClassName('breadcrumbs')[0];
    expect(breadcrumbs.textContent).toEqual(`starter.dev-github-showcases /svelte-kit-scss `);
  });
});
