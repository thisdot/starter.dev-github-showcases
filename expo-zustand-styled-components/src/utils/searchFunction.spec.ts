import { Repo } from '../types/user-repos-type';
import { repoDataFilteredBySearch } from './searchFunction';

describe('repoDataFilteredBySearch', () => {
  const mockRepos: Repo[] = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'This is repo 1',
      stargazerCount: 10,
      forkCount: 5,
      visibility: 'public',
      updatedAt: '2022-01-01T00:00:00Z',
      owner: {
        login: 'user1',
      },
      primaryLanguage: {
        name: 'JavaScript',
        color: '#f1e05a',
      },
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'This is repo 2',
      stargazerCount: 20,
      forkCount: 10,
      visibility: 'private',
      updatedAt: '2022-01-02T00:00:00Z',
      owner: {
        login: 'user2',
      },
      primaryLanguage: {
        name: 'TypeScript',
        color: '#2b7489',
      },
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'This is repo 3',
      stargazerCount: 30,
      forkCount: 15,
      visibility: 'public',
      updatedAt: '2022-01-03T00:00:00Z',
      owner: {
        login: 'user3',
      },
      primaryLanguage: {
        name: 'Python',
        color: '#3572a5',
      },
    },
  ];

  it('should return the original repos if search is an empty string', () => {
    const result = repoDataFilteredBySearch(mockRepos, '');
    expect(result).toEqual(mockRepos);
  });

  it('should return only repos that match the search', () => {
    const result = repoDataFilteredBySearch(mockRepos, 'Repo 1');
    expect(result).toEqual([mockRepos[0]]);
  });

  it('should return an empty array if no repos match the search', () => {
    const result = repoDataFilteredBySearch(mockRepos, 'Repo 4');
    expect(result).toEqual([]);
  });
});
