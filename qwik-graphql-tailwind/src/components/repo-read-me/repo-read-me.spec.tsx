import { createDOM } from '@builder.io/qwik/testing';
import { describe, vi, it } from 'vitest';
import { SharedState } from '~/routes/[owner]/[name]';
import { RepoReadMe } from './';

const MOCK_STORE: SharedState = {
  branch: 'HEAD',
  owner: 'this-dot',
  name: 'repo',
  path: '/',
  info: {
    isLoading: false,
  },
  tree: {
    isLoading: false,
  },
  readme: {
    isLoading: false,
    text: 'Just a readme',
  },
};

describe('Repo ReadMe Component', () => {
  // Mocks useStore/useContext
  vi.mock('@builder.io/qwik', async () => {
    const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
    return {
      ...qwik,
      useContext: () => ({
        MOCK_STORE,
      }),
    };
  });

  vi.mock('@builder.io/qwik-city', async () => {
    const qwikCity = await vi.importActual<typeof import('@builder.io/qwik-city')>('@builder.io/qwik-city');
    return {
      ...qwikCity,
      useLocation: () => ({
        pathname: '/ad',
      }),
    };
  });

  it(`should mount`, async () => {
    const { render } = await createDOM();

    await render(<RepoReadMe />);
  });
});
