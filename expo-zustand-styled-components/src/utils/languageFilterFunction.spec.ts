import { Repo } from '../types/user-repos-type';
import { defaultLanguage } from '../components/RepoFilter/data';
import { repoDataFilteredByLanguage } from './languageFilterFunction';

describe('repoDataFilteredByLanguage', () => {
  const repo1: Repo = {
    id: '1',
    name: 'Repo 1',
    description: 'First repository',
    stargazerCount: 10,
    forkCount: 2,
    visibility: 'public',
    updatedAt: '2022-03-31T09:30:00Z',
    owner: {
      login: 'user1',
    },
    isFork: false,
    isArchived: false,
    primaryLanguage: {
      name: 'JavaScript',
      color: '#f1e05a',
    },
  };

  const repo2: Repo = {
    id: '2',
    name: 'Repo 2',
    description: 'Second repository',
    stargazerCount: 5,
    forkCount: 0,
    visibility: 'private',
    updatedAt: '2022-03-30T09:30:00Z',
    owner: {
      login: 'user2',
    },
    isFork: false,
    isArchived: false,
    primaryLanguage: {
      name: 'TypeScript',
      color: '#2b7489',
    },
  };

  const repos = [repo1, repo2];

  it('returns all repos if language is defaultLanguage', () => {
    const filteredRepos = repoDataFilteredByLanguage(repos, defaultLanguage);
    expect(filteredRepos).toEqual(repos);
  });

  it('returns filtered repos if language is not defaultLanguage', () => {
    const filteredRepos = repoDataFilteredByLanguage(repos, 'JavaScript');
    expect(filteredRepos).toEqual([repo1]);
  });

  it('returns empty array if no repos match language', () => {
    const filteredRepos = repoDataFilteredByLanguage(repos, 'Ruby');
    expect(filteredRepos).toEqual([]);
  });

  it('returns empty array if repos array is empty', () => {
    const filteredRepos = repoDataFilteredByLanguage([], 'JavaScript');
    expect(filteredRepos).toEqual([]);
  });
});
