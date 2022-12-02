import { beforeEach, describe, expect, test } from 'vitest';
import { repoDataFilteredByLanguage } from './language-filter-function';

const MOCK_REPOS = [
  {
    id: 'fakeID',
    name: 'Repo Test',
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
    name: 'Repo Test',
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
    name: 'Repo Test',
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

const MOCK_LANGUAGE = 'TypeScript';

describe('languageFilter helper', () => {
  let filteredRepos = [];

  beforeEach(() => {
    filteredRepos = repoDataFilteredByLanguage(MOCK_LANGUAGE, MOCK_REPOS);
  });

  test('should return a filtered value by language', () => {
    expect(filteredRepos.length).toBe(1);
    expect(filteredRepos[0].primaryLanguage.name).toBe(MOCK_LANGUAGE);
  });

  test('should return empty if arent repos with that language', () => {
    const OTHER_LANGUAGE = 'CSS';
    const emptyRepos = repoDataFilteredByLanguage(OTHER_LANGUAGE, MOCK_REPOS);

    expect(emptyRepos.length).toBe(0);
  });
});
