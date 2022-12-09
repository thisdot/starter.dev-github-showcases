import type { GithubRepository } from '$lib/interfaces';
import { MOCK_SIMPLE_USER_TYPE_USER, MOCK_SIMPLE_USER_TYPE_ORG } from './common/simple-user';

export const MOCK_REPOSITORY_API_RESPONSE: GithubRepository = {
  id: 1296269,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
  name: 'Hello-World',
  full_name: 'octocat/Hello-World',
  owner: MOCK_SIMPLE_USER_TYPE_USER,
  private: false,
  description: 'This your first repo!',
  fork: false,
  url: 'https://api.github.com/repos/octocat/Hello-World',
  homepage: 'https://github.com',
  language: null,
  forks_count: 9,
  forks: 9,
  stargazers_count: 80,
  watchers_count: 80,
  watchers: 80,
  size: 108,
  default_branch: 'master',
  open_issues_count: 0,
  open_issues: 0,
  is_template: false,
  topics: ['octocat', 'atom', 'electron', 'api'],
  has_issues: true,
  has_projects: true,
  has_wiki: true,
  has_pages: false,
  has_downloads: true,
  has_discussions: false,
  archived: false,
  disabled: false,
  visibility: 'public',
  pushed_at: '2011-01-26T19:06:43Z',
  created_at: '2011-01-26T19:01:12Z',
  updated_at: '2011-01-26T19:14:43Z',
  permissions: {
    pull: true,
    push: false,
    admin: false,
  },
  allow_rebase_merge: true,
  temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
  allow_squash_merge: true,
  allow_auto_merge: false,
  delete_branch_on_merge: true,
  allow_merge_commit: true,
  subscribers_count: 42,
  network_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZW1pdA==',
  },
  organization: MOCK_SIMPLE_USER_TYPE_ORG,
};