import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it, vi } from 'vitest';
import { Repositories } from '~/utils/types';
import { UserRepos } from './user-repos';

const repos: Repositories = {
  nodes: [
    {
      id: 'MDEwOlJlcG9zaXRvcnkxMjM0NzUxMjM=',
      name: 'my-repo1',
      description: 'This is just a description for my-repo1.',
      isArchived: false,
      isPrivate: false,
      primaryLanguage: {
        id: 'MDg6TGFuZ3VhZ2UxNzI=',
        name: 'Javascript',
        color: '#6b7289',
      },
      updatedAt: '2019-01-17T23:41:24Z',
      languageColor: null,
      isFork: false,
      stargazerCount: 0,
      forkCount: 0,
    },
    {
      name: 'my-repo2',
      description: 'This is just a description for my-repo2.',
      isArchived: false,
      isPrivate: false,
      primaryLanguage: {
        id: 'MDg6TGFuZ3VhZ2UxNzI=',
        name: 'TypeScript',
        color: '#2b7489',
      },
      updatedAt: '2019-01-17T23:41:24Z',
      id: 'todo',
      languageColor: null,
      isFork: false,
      stargazerCount: 0,
      forkCount: 0,
    },
  ],
  pageInfo: {
    endCursor: undefined,
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: undefined,
  },
};

const owner = 'my-username';

describe('UserRepos component', () => {
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
        isLoading: false,
        searchResponse: repos.nodes,
      }),
    };
  });

  it('should mount', async () => {
    const { render } = await createDOM();
    await render(<UserRepos repos={repos} owner={owner} />);
  });

  it('should show the info of the user repos', async () => {
    const { screen, render } = await createDOM();
    await render(<UserRepos repos={repos} owner={owner} />);

    expect(screen.outerHTML).toContain(owner);
  });
});
