import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Breadcrumbs from './Breadcrumbs.svelte';

describe('Breadcrumbs Component', () => {
  beforeEach(() => {
    render(Breadcrumbs, {
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
    });
  });

  it('should render breadcrumb accurately', () => {
    const name = screen.getByText(/starter\.dev-github-showcases\s*\/\s*svelte-kit-scss/);
    expect(name).toBeTruthy();
  });
});
