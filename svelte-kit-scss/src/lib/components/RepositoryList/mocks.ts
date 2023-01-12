import { buildRepositoryCardViewModel, remapRepository } from '$lib/helpers';
import { MOCK_REPOSITORY } from '$lib/helpers/mocks/repository';

export const MOCK_REPOSITORY_CARD_VIEW_MODELS = [MOCK_REPOSITORY, MOCK_REPOSITORY]
  .map(remapRepository)
  .map(buildRepositoryCardViewModel);

export const MOCK_REPOSITORY_CARD_VIEW_MODEL = MOCK_REPOSITORY_CARD_VIEW_MODELS[0];

export const MOCK_REPOSITORIES = [
  {
    defaultBranch: 'main',
    description:
      'A set of websites that act as collections of popular libraries and learning content for the web ecosystem.',
    forksCount: 18,
    homepage: 'https://framework.dev',
    name: 'framework.dev',
    openIssuesCount: 44,
    owner: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
      id: 22839396,
      login: 'thisdot',
      siteAdmin: false,
      type: 'Organization',
      url: 'https://api.github.com/users/thisdot',
      href: '/thisdot',
    },
    stargazersCount: 74,
    topics: [
      'angular',
      'astro',
      'graphql',
      'nodejs',
      'qwik',
      'react',
      'solidjs',
      'svelte',
      'vanilla-extract',
      'vue',
    ],
    visibility: 'public',
    watchersCount: 74,
    language: 'TypeScript',
    updatedAt: '2023-01-09T06:24:04Z',
    license: {
      name: 'MIT License',
    },
    archived: false,
    fork: false,
    routeHref: '/thisdot/framework.dev',
  },
  {
    defaultBranch: 'main',
    description: null,
    forksCount: 2,
    homepage: '',
    name: 'starter.dev',
    openIssuesCount: 119,
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
      'angular',
      'apollo-client',
      'astro',
      'chakra-ui',
      'jest',
      'nextjs',
      'ngrx',
      'nuxt',
      'pinia',
      'qwik',
      'react-query',
      'reactjs',
      'rxjs',
      'starter-kit',
      'storybook',
      'styled-components',
      'tailwindcss',
      'tanstack-query',
      'typescript',
      'vue',
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
    routeHref: '/thisdot/starter.dev',
  },
  {
    defaultBranch: 'main',
    description: 'A collection of GitHub clone implementations.',
    forksCount: 9,
    homepage: '',
    name: 'starter.dev-github-showcases',
    openIssuesCount: 180,
    owner: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
      id: 22839396,
      login: 'thisdot',
      siteAdmin: false,
      type: 'Organization',
      url: 'https://api.github.com/users/thisdot',
      href: '/thisdot',
    },
    stargazersCount: 44,
    topics: ['angular', 'apollo-client', 'github', 'tailwindcss'],
    visibility: 'public',
    watchersCount: 44,
    language: 'TypeScript',
    updatedAt: '2022-12-16T02:31:04Z',
    license: null,
    archived: false,
    fork: false,
    routeHref: '/thisdot/starter.dev-github-showcases',
  },
];

export const MOCK_REPOSITORY_CONTROLS = {
  sortFilters: [
    {
      active: true,
      href: '/thisdot',
      label: 'Last updated',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=name&type=',
      label: 'Name',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=stars&type=',
      label: 'Stars',
    },
  ],
  typeFilters: [
    {
      active: true,
      href: '/thisdot',
      label: 'All',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=updated&type=public',
      label: 'Public',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=updated&type=private',
      label: 'Private',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=updated&type=sources',
      label: 'Sources',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=updated&type=forks',
      label: 'Forks',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=updated&type=archived',
      label: 'Archived',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=updated&type=mirrors',
      label: 'Mirrors',
    },
    {
      active: false,
      href: '/thisdot?language=&q=&sort=updated&type=templates',
      label: 'Templates',
    },
  ],
  search: {
    term: undefined,
  },
  sentence: [
    {
      text: '39',
      emphasis: true,
    },
    {
      text: 'results for',
    },
    {
      text: 'all',
      emphasis: true,
    },
    {
      text: 'repositories',
    },
    {
      text: 'sorted by',
    },
    {
      text: 'last updated',
      emphasis: true,
    },
  ],
};
