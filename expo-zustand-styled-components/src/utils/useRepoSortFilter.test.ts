import { renderHook } from '@testing-library/react-hooks';
import { Repo } from '../types/user-repos-type';
import useRepoSortFilter from './useRepoSortFiler';

const mockRepos: Repo[] = [
  {
    id: '1',
    name: 'repo1',
    stargazerCount: 5,
    forkCount: 2,
    updatedAt: '2022-01-01T00:00:00Z',
    description: 'Mock javascript repo',
    owner: {
      login: 'thisdot',
    },
    visibility: 'public',
    isArchived: false,
    isFork: false,
    primaryLanguage: {
      name: 'JavaScript',
      color: 'yellow',
    },
  },
  {
    id: '2',
    name: 'repo2',
    stargazerCount: 2,
    forkCount: 2,
    updatedAt: '2022-02-01T00:00:00Z',
    description: 'Mock typecript repo',
    owner: {
      login: 'thisdot',
    },
    visibility: 'public',
    isArchived: false,
    isFork: false,
    primaryLanguage: {
      name: 'TypeScript',
      color: 'yellow',
    },
  },
  {
    id: '3',
    name: 'repo3',
    stargazerCount: 3,
    forkCount: 1,
    updatedAt: '2021-02-01T00:00:00Z',
    description: 'Mock TypeScript repo',
    owner: {
      login: 'thisdot',
    },
    visibility: 'public',
    isArchived: false,
    isFork: true,
    primaryLanguage: {
      name: 'TypeScript',
      color: 'yellow',
    },
  },
];

describe('useRepoSortFilter', () => {
  test('returns all repos when no filters or sorting are applied', () => {
    const { result } = renderHook(() => useRepoSortFilter(mockRepos, '', 'All', 'Name', ''));

    expect(result.current.result).toEqual(mockRepos);
  });

  test('filters repos by search query', () => {
    const { result } = renderHook(() => useRepoSortFilter(mockRepos, 'repo2', 'All', 'Name', ''));

    expect(result.current.result).toEqual([mockRepos[1]]);
  });

  test('filters repos by type', () => {
    const { result } = renderHook(() => useRepoSortFilter(mockRepos, '', 'Forks', 'Name', ''));

    expect(result.current.result).toEqual([mockRepos[2]]);
  });

  test('sorts repos by stargazers', () => {
    const { result } = renderHook(() => useRepoSortFilter(mockRepos, '', 'All', 'Stars', ''));

    expect(result.current.result).toEqual([mockRepos[0], mockRepos[2], mockRepos[1]]);
  });

  test('filters repos by language', () => {
    const { result } = renderHook(() =>
      useRepoSortFilter(mockRepos, '', 'All', 'Name', 'TypeScript')
    );

    expect(result.current.result).toEqual([mockRepos[1], mockRepos[2]]);
  });

  test('returns languages used in repos', () => {
    const { result } = renderHook(() => useRepoSortFilter(mockRepos, '', 'All', 'Name', ''));

    expect(result.current.languages).toContain('JavaScript');
    expect(result.current.languages).toContain('TypeScript');
  });
});
