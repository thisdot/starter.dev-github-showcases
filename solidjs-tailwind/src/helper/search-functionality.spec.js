import { beforeEach, describe, expect, test, vi } from 'vitest';
import { repoDataFilteredBySearch } from './search-functionality';

const MOCK_REPOS = [
  {
    id: 'fakeID',
    name: 'Repo Test Java',
    description: null,
    stargazerCount: 0,
    forkCount: 0,
    isArchived: false,
    isFork: false,
    primaryLanguage: {
      id: 'MDg6TGFuZ3VhZ2UxNTg=',
      color: '#b07219',
      name: 'Java',
    },
    isPrivate: false,
    updatedAt: '2016-06-27T20:21:44Z',
  },
  {
    id: 'fakeID',
    name: 'Repo Test Typescript',
    description: null,
    stargazerCount: 0,
    forkCount: 0,
    isArchived: false,
    isFork: false,
    primaryLanguage: {
      id: 'MDg6TGFuZ3VhZ2UxNTg=',
      color: '#3178c6',
      name: 'TypeScript',
    },
    isPrivate: false,
    updatedAt: '2016-06-27T20:21:44Z',
  },
  {
    id: 'fakeID',
    name: 'Repo Test php',
    description: null,
    stargazerCount: 0,
    forkCount: 0,
    isArchived: false,
    isFork: false,
    primaryLanguage: {
      id: 'MDg6TGFuZ3VhZ2UxNTg=',
      color: '#4F5D95',
      name: 'PHP',
    },
    isPrivate: false,
    updatedAt: '2016-06-27T20:21:44Z',
  },
];
const MOCK_SEARCH_INPUT = 'php';

vi.mock('../components/RepoFilter/RepoFilter.store', () => ({
  search: vi.fn(() => MOCK_SEARCH_INPUT),
}));

describe('searchFunctionality helper', () => {
  let filteredRepos = [];

  beforeEach(() => {
    filteredRepos = repoDataFilteredBySearch(MOCK_REPOS);
  });

  test('should return a filtered by search', () => {
    expect(filteredRepos.length).toBe(1);
  });

  test('should return a empty list if repos dont match criteria', () => {
    const emptyFilteredRepos = repoDataFilteredBySearch([
      {
        id: 'fakeID',
        name: 'Repo Test Java',
        description: null,
        stargazerCount: 0,
        forkCount: 0,
        isArchived: false,
        isFork: false,
        primaryLanguage: {
          id: 'MDg6TGFuZ3VhZ2UxNTg=',
          color: '#b07219',
          name: 'Java',
        },
        isPrivate: false,
        updatedAt: '2016-06-27T20:21:44Z',
      },
    ]);

    expect(emptyFilteredRepos.length).toBe(0);
  });
});
