import { createDOM } from '@builder.io/qwik/testing';
import { describe, vi, it } from 'vitest';
import { RepoTree } from '../../components/repo-tree';

const MOCK_STORE = {
  branch: 'HEAD',
  owner: '',
  name: '',
  info: {
    isLoading: false,
  },
  tree: {
    isLoading: false,
    data: {
      branches: [{ name: 'main' }],
      tree: [{ name: '.artifacts', path: '.artifacts', type: 'tree' }],
    },
  },
  readme: {
    isLoading: false,
    text: 'Just a readme',
  },
};

describe('RepoTree Component', () => {
  // Mocks useStore/useContext
  vi.mock('@builder.io/qwik', async () => {
    const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
    return {
      ...qwik,
      useContext: () => ({
        MOCK_STORE,
      }),
      useStore: () => ({}),
    };
  });
  it(`should mount`, async () => {
    const { render } = await createDOM();

    await render(<RepoTree />);
  });

  it(`should show the top repos`, async () => {
    const { screen, render } = await createDOM();

    await render(<RepoTree />);
    console.log(screen.outerHTML);
  });
});
