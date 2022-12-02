import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import { SORT_OPTIONS } from '../components/RepoFilter/data';
import { sortedRepoData } from './sort-repo-function';

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
