import { beforeEach, describe, expect, test } from 'vitest';
import { getLanguages } from './getLanguages';

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

const INITIAL_VALUE = 'all';

describe('getLanguages helper', () => {
  let languages = [];

  beforeEach(() => {
    languages = getLanguages(MOCK_REPOS);
  });

  test('should return a unique list of languages', () => {
    expect(languages.length).toBe(4);
  });

  test('should return "All" in the first position', () => {
    expect(languages[0].value).toBe(INITIAL_VALUE);
  });

  test('should return at least one item', () => {
    const emptyLanguages = getLanguages([]);
    expect(emptyLanguages.length).toBe(1);
  });
});
