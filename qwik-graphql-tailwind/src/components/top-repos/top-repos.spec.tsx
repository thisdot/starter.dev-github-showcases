import { createDOM } from '@builder.io/qwik/testing';
import { expect, describe, vi, it } from 'vitest';
import { TopRepos } from './index';
import { TopRepo } from './types';

const MOCK_TOP_REPOS: TopRepo[] = [
  {
    id: 'test',
    name: 'test-repo',
    owner: 'this-dot',
    isPrivate: false,
    stargazerCount: 10,
    forkCount: 10,
    updatedAt: new Date(),
  },
];

describe('TopRepos Component', () => {
  // Mocks useStore/useContext
  vi.mock('@builder.io/qwik', async () => {
    const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
    return {
      ...qwik,
      useContext: () => ({
        search: '',
        language: '',
        type: '',
        sortBy: '',
      }),
      useStore: () => ({
        store: {
          login: 'this-dot',
          data: MOCK_TOP_REPOS,
          isLoading: false,
        },
      }),
      useClientEffect$: () => {
        // Return a mocked value for the useClientEffect$ method
        return {
          data: [
            {
              name: 'Mocked Repo 1',
              description: 'This is a mocked repository',
              stars: 100,
            },
            {
              name: 'Mocked Repo 2',
              description: 'This is another mocked repository',
              stars: 50,
            },
          ],
        };
      },
    };
  });
  it(`should mount`, async () => {
    const { render } = await createDOM();

    await render(<TopRepos />);
  });

  // it(`should show the top repos`, async () => {
  //   const { screen, render } = await createDOM();

  //   await render(<TopRepos />);
  //   expect(screen.outerHTML).toContain('test-repo');
  // });
});
