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

export const MOCK_REPOSITORY_STATE = {
  defaultBranch: 'main',
  description: null,
  forksCount: 2,
  homepage: '',
  name: 'starter.dev',
  openIssuesCount: 112,
  owner: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
    id: 22839396,
    login: 'thisdot',
    siteAdmin: false,
    type: 'Organization',
    url: 'https://api.github.com/users/thisdot',
    href: '/thisdot',
  },
  stargazersCount: 21,
  topics: [
    {
      name: 'angular',
      url: 'https://github.com/topics/angular',
    },
    {
      name: 'apollo-client',
      url: 'https://github.com/topics/apollo-client',
    },
    {
      name: 'astro',
      url: 'https://github.com/topics/astro',
    },
    {
      name: 'chakra-ui',
      url: 'https://github.com/topics/chakra-ui',
    },
    {
      name: 'jest',
      url: 'https://github.com/topics/jest',
    },
    {
      name: 'nextjs',
      url: 'https://github.com/topics/nextjs',
    },
    {
      name: 'ngrx',
      url: 'https://github.com/topics/ngrx',
    },
    {
      name: 'nuxt',
      url: 'https://github.com/topics/nuxt',
    },
    {
      name: 'pinia',
      url: 'https://github.com/topics/pinia',
    },
    {
      name: 'qwik',
      url: 'https://github.com/topics/qwik',
    },
    {
      name: 'react-query',
      url: 'https://github.com/topics/react-query',
    },
    {
      name: 'reactjs',
      url: 'https://github.com/topics/reactjs',
    },
    {
      name: 'rxjs',
      url: 'https://github.com/topics/rxjs',
    },
    {
      name: 'starter-kit',
      url: 'https://github.com/topics/starter-kit',
    },
    {
      name: 'storybook',
      url: 'https://github.com/topics/storybook',
    },
    {
      name: 'styled-components',
      url: 'https://github.com/topics/styled-components',
    },
    {
      name: 'tailwindcss',
      url: 'https://github.com/topics/tailwindcss',
    },
    {
      name: 'tanstack-query',
      url: 'https://github.com/topics/tanstack-query',
    },
    {
      name: 'typescript',
      url: 'https://github.com/topics/typescript',
    },
    {
      name: 'vue',
      url: 'https://github.com/topics/vue',
    },
  ],
  visibility: 'public',
  watchersCount: 21,
  language: 'TypeScript',
  updatedAt: '2023-01-01T18:40:35Z',
  license: {
    name: 'MIT License',
  },
  archived: false,
  fork: false,
  openPullRequestsCount: 14,
};

export const MOCK_BREADCRUMBS = [
  {
    name: 'thisdot',
    href: '/thisdot',
  },
  {
    name: 'starter.dev',
    href: '/thisdot/starter.dev',
    emphasis: true,
  },
];
