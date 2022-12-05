import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SORT_OPTIONS } from '../components/RepoFilter/data';
import { sortedRepoData } from './sort-repo-function';
import { MOCK_REPOS } from './fixtures/mocks';

const MOCK_SORT_NAME = 'Repo Test Java';

describe('sort-repo-function helper', () => {
  vi.mock('../components/RepoFilter/RepoFilter.store', () => ({
    sortBy: vi
      .fn()
      .mockImplementationOnce(() => SORT_OPTIONS.name)
      .mockImplementationOnce(() => SORT_OPTIONS.stars)
      .mockImplementationOnce(() => SORT_OPTIONS.default),
  }));
  let filteredRepos = [];
  beforeEach(() => {
    filteredRepos = sortedRepoData(MOCK_REPOS);
  });

  it('should return a list filtered by name', () => {
    const firstItem = filteredRepos[0];
    expect(firstItem.name).toBe(MOCK_SORT_NAME);
  });

  it('should return a list filtered by stars', () => {
    const firstItem = filteredRepos[0];
    expect(firstItem.name).toBe(MOCK_SORT_NAME);
  });
});
