import { sortedRepoData } from './sortRepoFunction';

describe('sortedRepoData', () => {
  const repos = [
    {
      id: '1',
      name: 'repo1',
      description: 'desc1',
      stargazerCount: 2,
      forkCount: 1,
      visibility: 'PUBLIC',
      updatedAt: '2022-03-01T00:00:00Z',
      owner: { login: 'user1' },
      primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
    },
    {
      id: '2',
      name: 'repo2',
      description: 'desc2',
      stargazerCount: 3,
      forkCount: 2,
      visibility: 'PRIVATE',
      updatedAt: '2022-02-01T00:00:00Z',
      owner: { login: 'user1' },
      primaryLanguage: { name: 'Python', color: '#3572A5' },
    },
    {
      id: '3',
      name: 'repo3',
      description: 'desc3',
      stargazerCount: 1,
      forkCount: 0,
      visibility: 'PUBLIC',
      updatedAt: '2022-01-01T00:00:00Z',
      owner: { login: 'user2' },
      primaryLanguage: { name: 'TypeScript', color: '#2b7489' },
    },
  ];

  it('should sort repos by name', () => {
    const sortedRepos = sortedRepoData(repos, 'Name');
    expect(sortedRepos[0].name).toBe('repo1');
    expect(sortedRepos[1].name).toBe('repo2');
    expect(sortedRepos[2].name).toBe('repo3');
  });

  it('should sort repos by stars', () => {
    const sortedRepos = sortedRepoData(repos, 'Stars');
    expect(sortedRepos[0].name).toBe('repo2');
    expect(sortedRepos[1].name).toBe('repo1');
    expect(sortedRepos[2].name).toBe('repo3');
  });

  it('should sort repos by updatedAt', () => {
    const sortedRepos = sortedRepoData(repos, 'Last updated');
    expect(sortedRepos[0].name).toBe('repo1');
    expect(sortedRepos[1].name).toBe('repo2');
    expect(sortedRepos[2].name).toBe('repo3');
  });
});
