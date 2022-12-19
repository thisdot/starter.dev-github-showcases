import { beforeEach, describe, expect, test, vi } from 'vitest';
import { repoDataFilteredBySearch } from './search-functionality';
import { MOCK_REPOS } from './fixtures/mocks';

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
