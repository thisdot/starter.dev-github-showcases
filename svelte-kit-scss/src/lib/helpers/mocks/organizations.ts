import type { GithubOrganizationSimple } from '$lib/interfaces/data-contract/github';

export const MOCK_ORGANIZATION_SIMPLE: GithubOrganizationSimple = {
  avatar_url: 'https://avatars.githubusercontent.com/u/9919?s=64&v=4',
  description: 'A great organization',
  id: 1,
  login: 'github',
  node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
  url: 'https://api.github.com/orgs/github',
};

export const MOCK_ORGANIZATION_SIMPLE_ARRAY: GithubOrganizationSimple[] = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/9919?s=64&v=4',
    description: 'A great organization',
    id: 1,
    login: 'github',
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
    url: 'https://api.github.com/orgs/github',
  },
  {
    login: 'thisdot',
    id: 2289396,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
    url: 'https://api.github.com/orgs/thisdot',
    avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
    description: 'This Dot Labs',
  },
];
