import { graphql } from 'msw';

export const mockUserTopReposQuery = graphql.query(
  'UserTopRepos',
  (_, res, ctx) => {
    return res(ctx.data(reposResponse));
  }
);

//
// Mocked responses
//

const reposResponse = {
  viewer: {
    login: 'danecando',
    topRepositories: {
      nodes: [
        {
          id: 'MDEwOlJlcG9zaXRvcnkzMTYwNjM5NTU=',
          name: 'gh-users',
          description: 'Implementation of the GitHub user search in React',
          owner: { login: 'danecando' },
          primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
          isPrivate: false,
          stargazerCount: 1,
          forkCount: 0,
          updatedAt: '2021-05-07T20:56:38Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNjEyNzIyNzI=',
          name: 'stock-sniper',
          description: 'monitors large retailers for gpu restock',
          owner: { login: 'danecando' },
          primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
          isPrivate: false,
          stargazerCount: 0,
          forkCount: 0,
          updatedAt: '2021-04-30T23:59:45Z',
        },
        {
          id: 'R_kgDOGO7ROA',
          name: 'with-firebase-user',
          description:
            'A higher order function that decodes a Firebase Auth JWT and decorates the NextJS api request object with a Firebase user',
          owner: { login: 'danecando' },
          primaryLanguage: { name: 'TypeScript', color: '#2b7489' },
          isPrivate: false,
          stargazerCount: 0,
          forkCount: 0,
          updatedAt: '2021-11-13T01:59:23Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNjM2MjU5MjM=',
          name: 'JSM-Detox',
          description:
            'Demo app for JSMarathon presentation: React Native E2E Testing with Detox',
          owner: { login: 'danecando' },
          primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
          isPrivate: false,
          stargazerCount: 6,
          forkCount: 5,
          updatedAt: '2021-11-17T05:58:18Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNTkwMjIwNzI=',
          name: 'notion-sdk-js',
          description: 'Official Notion JavaScript Client',
          owner: { login: 'makenotion' },
          primaryLanguage: { name: 'TypeScript', color: '#2b7489' },
          isPrivate: false,
          stargazerCount: 2079,
          forkCount: 189,
          updatedAt: '2021-11-30T04:14:57Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNzk1ODQyNg==',
          name: 'cando-zsh',
          description: 'my oh-my-zsh plugin',
          owner: { login: 'danecando' },
          primaryLanguage: { name: 'Shell', color: '#89e051' },
          isPrivate: false,
          stargazerCount: 0,
          forkCount: 0,
          updatedAt: '2021-05-14T14:38:47Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkyMTc5NDU2NzI=',
          name: 'swr-site',
          description: 'The official website for SWR.',
          owner: { login: 'vercel' },
          primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
          isPrivate: false,
          stargazerCount: 236,
          forkCount: 142,
          updatedAt: '2021-11-30T12:52:42Z',
        },
        {
          id: 'R_kgDOGUNE2A',
          name: 'danecando',
          description: null,
          owner: { login: 'danecando' },
          primaryLanguage: null,
          isPrivate: false,
          stargazerCount: 0,
          forkCount: 0,
          updatedAt: '2021-11-02T12:43:42Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkyNjEyNzQ2NjA=',
          name: 'react-native-launch-arguments',
          description: 'Get launch arguments for testing with Detox and Appium',
          owner: { login: 'iamolegga' },
          primaryLanguage: { name: 'Java', color: '#b07219' },
          isPrivate: false,
          stargazerCount: 15,
          forkCount: 4,
          updatedAt: '2021-11-09T19:35:45Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzMTc3MTk4MzY=',
          name: 'tscored',
          description:
            'General utility library written in TypeScript (to practice TS & some other fundamentals)',
          owner: { login: 'danecando' },
          primaryLanguage: { name: 'TypeScript', color: '#2b7489' },
          isPrivate: false,
          stargazerCount: 0,
          forkCount: 0,
          updatedAt: '2020-12-03T03:10:28Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkxMDU5NjMyNTM=',
          name: 'reactjs.org',
          description: 'The React documentation website',
          owner: { login: 'reactjs' },
          primaryLanguage: { name: 'TypeScript', color: '#2b7489' },
          isPrivate: false,
          stargazerCount: 6629,
          forkCount: 5591,
          updatedAt: '2021-11-30T07:17:37Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnk2MjE1MDM0MQ==',
          name: 'react-native-document-picker',
          description:
            'Document Picker for React Native using Document Providers',
          owner: { login: 'rnmods' },
          primaryLanguage: { name: 'Java', color: '#b07219' },
          isPrivate: false,
          stargazerCount: 888,
          forkCount: 360,
          updatedAt: '2021-11-29T09:59:25Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkyMzI5Njk3Ng==',
          name: 'hapi-sequelize',
          description: 'Hapi plugin for the Sequelize ORM',
          owner: { login: 'danecando' },
          primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
          isPrivate: false,
          stargazerCount: 112,
          forkCount: 38,
          updatedAt: '2021-06-14T02:48:12Z',
        },
      ],
    },
  },
};
