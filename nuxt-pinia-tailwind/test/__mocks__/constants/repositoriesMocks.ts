import { IRepository } from '@/types/repository/interfaces';

export const repositoryMock: IRepository = {
  id: 873328,
  private: false,
  name: 'test-repo',
  full_name: 'test/test-repo',
  description: 'test description',
  owner: {
    login: 'test',
  },
  html_url: '',
  url: '',
  updated_at: new Date('2021-05-01T12:00:00Z'),
  stargazers_count: 1,
  language: 'typescript',
  branches_url: '',
  visibility: 'public',
  subscribers_count: 1,
  forks_count: 1,
  open_issues_count: 1,
  pulls: 1,
  default_branch: 'main',
  homepage: '',
  watchers_count: 1,
};
