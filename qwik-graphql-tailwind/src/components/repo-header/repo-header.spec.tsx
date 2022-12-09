import { createDOM } from '@builder.io/qwik/testing';
import { describe, it, vi } from 'vitest';
import { RepoHeader } from './';

describe('RepoHeader component', function () {
  it('should mount', async () => {
    const { render } = await createDOM();

    vi.mock('@builder.io/qwik-city', async () => {
      const qwik = await vi.importActual<typeof import('@builder.io/qwik-city')>('@builder.io/qwik-city');
      return {
        ...qwik,
        useLocation: () => ({
          pathName: 'thisdot',
        }),
      };
    });

    await render(
      <RepoHeader
        name={'test-repo'}
        owner={'thisDot'}
        stargazerCount={20}
        forkCount={20}
        watcherCount={20}
        issuesCount={20}
        prCount={20}
      />
    );
  });
});
