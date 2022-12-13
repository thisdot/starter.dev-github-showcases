import type {
  GithubRepositoryLicenseSimple,
  GithubRepositoryPermissions,
  GithubSimpleUser,
  GithubRepository,
} from '$lib/interfaces/data-contract/github';
import { MOCK_SIMPLE_USER_TYPE_USER } from './common/simple-user';

export const MOCK_REPOSITORY_OWNER: GithubSimpleUser = MOCK_SIMPLE_USER_TYPE_USER;

export const MOCK_REPOSITORY_PERMISSIONS: GithubRepositoryPermissions = {
  admin: false,
  push: false,
  pull: true,
};

export const MOCK_REPOSITORY_LICENSE_SIMPLE: GithubRepositoryLicenseSimple = {
  key: 'other',
  name: 'Other',
  spdx_id: 'NOASSERTION',
  url: null,
};

export const MOCK_REPOSITORY: GithubRepository = {
  archived: false,
  created_at: '2011-01-26T19:01:12Z',
  default_branch: 'master',
  description: 'This your first repo!',
  disabled: false,
  fork: false,
  forks_count: 9,
  forks: 9,
  full_name: 'octocat/Hello-World',
  has_discussions: false,
  has_downloads: true,
  has_issues: true,
  has_pages: false,
  has_projects: true,
  has_wiki: true,
  homepage: 'https://github.com',
  id: 1296269,
  is_template: false,
  language: 'TypeScript',
  license: MOCK_REPOSITORY_LICENSE_SIMPLE,
  name: 'Hello-World',
  open_issues_count: 8,
  open_issues: 8,
  owner: MOCK_SIMPLE_USER_TYPE_USER,
  permissions: MOCK_REPOSITORY_PERMISSIONS,
  private: false,
  pushed_at: '2011-01-26T19:06:43Z',
  size: 108,
  stargazers_count: 80,
  topics: ['octocat', 'atom', 'electron', 'api'],
  updated_at: '2011-01-26T19:14:43Z',
  url: 'https://api.github.com/repos/octocat/Hello-World',
  visibility: 'public',
  watchers_count: 80,
  watchers: 80,
  web_commit_signoff_required: false,
};
