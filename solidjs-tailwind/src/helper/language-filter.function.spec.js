import { beforeEach, describe, expect, test, vi } from 'vitest';
import { repoDataFilteredByLanguage } from './language-filter-function';
import { MOCK_REPOS } from './fixtures/mocks';

const MOCK_LANGUAGE = 'TypeScript';

describe('languageFilter helper', () => {
  let filteredRepos = [];
  vi.mock('../components/RepoFilter/RepoFilter.store', () => ({
    language: vi.fn(() => MOCK_LANGUAGE),
  }));

  beforeEach(() => {
    filteredRepos = repoDataFilteredByLanguage(MOCK_REPOS);
  });

  test('should return a filtered value by language', () => {
    expect(filteredRepos.length).toBe(1);
    expect(filteredRepos[0].primaryLanguage.name).toBe(MOCK_LANGUAGE);
  });
});
