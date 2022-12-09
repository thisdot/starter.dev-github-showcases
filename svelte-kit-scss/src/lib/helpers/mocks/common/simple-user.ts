import type { GithubSimpleUser } from '$lib/interfaces';

export const MOCK_SIMPLE_USER_TYPE_USER: GithubSimpleUser = {
  login: 'octocat',
  id: 1,
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  url: 'https://api.github.com/users/octocat',
  type: 'User',
  site_admin: false,
};

export const MOCK_SIMPLE_USER_TYPE_ORG: GithubSimpleUser = {
  login: 'octocat',
  id: 1,
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  url: 'https://api.github.com/users/octocat',
  type: 'Organization',
  site_admin: false,
};
