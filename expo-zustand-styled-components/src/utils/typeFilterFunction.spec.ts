import { FilterType } from '../hooks/stores/useRepoFilterStore';
import { Repo } from '../types/user-repos-type';
import { repoDataFilteredByType } from './typeFilterFunction';

describe('repoDataFilteredByType', () => {
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
    isArchived: true,
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
    isFork: true,
    isArchived: false,
    primaryLanguage: {
      name: 'TypeScript',
      color: '#2b7489',
    },
  };

  const repos = [repo1, repo2];

  it('returns all repos if filter type is default', () => {
    const filteredRepos = repoDataFilteredByType(repos, 'All');
    expect(filteredRepos).toEqual(repos);
  });

  it('returns filtered repos if filter type is forks', () => {
    const filteredRepos = repoDataFilteredByType(repos, 'Forks');
    expect(filteredRepos).toEqual([repo2]);
  });

  it('returns filtered repos if filter type is archived', () => {
    const filteredRepos = repoDataFilteredByType(repos, 'Archived');
    expect(filteredRepos).toEqual([repo1]);
  });

  it('returns empty array if no repos match filter type', () => {
    const filteredRepos = repoDataFilteredByType(repos, 'not a valid filter type' as FilterType);
    expect(filteredRepos).toEqual(repos);
  });

  it('returns empty array if repos array is empty', () => {
    const filteredRepos = repoDataFilteredByType([], 'Forks');
    expect(filteredRepos).toEqual([]);
  });
});
