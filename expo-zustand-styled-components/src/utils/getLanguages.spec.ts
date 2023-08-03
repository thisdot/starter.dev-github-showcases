import { getLanguages } from './getLanguages';
import { Repo } from '../types/user-repos-type';

describe('getLanguages', () => {
  it('should return an array containing all languages including "All"', () => {
    const repos: Repo[] = [
      {
        id: '1',
        name: 'Repo 1',
        description: 'Description for Repo 1',
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
        description: 'Description for Repo 2',
        stargazerCount: 20,
        forkCount: 10,
        visibility: 'private',
        updatedAt: '2022-02-01T00:00:00Z',
        owner: {
          login: 'user2',
        },
        primaryLanguage: {
          name: 'Python',
          color: '#3572A5',
        },
      },
    ];
    const result = getLanguages(repos);
    expect(result).toEqual(['All', 'JavaScript', 'Python']);
  });

  it('should return an array containing only "All" when no repos have a primary language', () => {
    const repos: Repo[] = [
      {
        id: '1',
        name: 'Repo 1',
        description: 'Description for Repo 1',
        stargazerCount: 10,
        forkCount: 5,
        visibility: 'public',
        updatedAt: '2022-01-01T00:00:00Z',
        owner: {
          login: 'user1',
        },
        primaryLanguage: null,
      },
      {
        id: '2',
        name: 'Repo 2',
        description: 'Description for Repo 2',
        stargazerCount: 20,
        forkCount: 10,
        visibility: 'private',
        updatedAt: '2022-02-01T00:00:00Z',
        owner: {
          login: 'user2',
        },
        primaryLanguage: null,
      },
    ];
    const result = getLanguages(repos);
    expect(result).toEqual(['All']);
  });

  it('should return an array containing only "All" when the input array is empty', () => {
    const repos: Repo[] = [];
    const result = getLanguages(repos);
    expect(result).toEqual(['All']);
  });
});
