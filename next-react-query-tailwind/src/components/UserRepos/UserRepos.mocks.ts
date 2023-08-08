import { graphql } from 'msw';

export const mockUserReposQuery = graphql.query(
  'UserRepos',
  (req, res, ctx) => {
    const { username } = req.variables;

    if (username !== 'testuser') {
      return res(
        ctx.errors([
          {
            type: 'NOT_FOUND',
            path: ['user'],
            locations: [
              {
                line: 3,
                column: 3,
              },
            ],
            message: `Could not resolve to a User with the login of '${username}'.`,
          },
        ])
      );
    }

    return res(ctx.data(reposResponse));
  }
);

//
// Mocked responses
//

const reposResponse = {
  owner: {
    repositories: {
      nodes: [
        {
          id: 'MDEwOlJlcG9zaXRvcnkxNTExNzc2OQ==',
          name: 'jquery.shiptime',
          description:
            'Shipping Time is a plugin for your ecommerce website that displays the time until the shipping cut off. You can also configure it to show estimated delivery dates based on user location.',
          stargazerCount: 11,
          forkCount: 2,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-05-02T10:43:10Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkyMTUyNjQ3Nw==',
          name: 'jquery.ghostrelated',
          description: 'Related posts jQuery plugin for Ghost',
          stargazerCount: 49,
          forkCount: 13,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-08-20T23:30:55Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkyMzI5Njk3Ng==',
          name: 'hapi-sequelize',
          description: 'Hapi plugin for the Sequelize ORM',
          stargazerCount: 112,
          forkCount: 38,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-06-14T02:48:12Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkyMzcyNDQyNg==',
          name: 'hapi-route-access',
          description: 'simple hapi role & permission auth',
          stargazerCount: 2,
          forkCount: 0,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-01-10T04:07:27Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkyNjEwMTQwOQ==',
          name: 'recoverize-app-old',
          description: 'the recoverize mobile application',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#563d7c', name: 'CSS' },
          isPrivate: false,
          updatedAt: '2018-06-15T07:03:06Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNjU0NzM5NQ==',
          name: 'twitter-stream',
          description: 'A demo app for Boca JavaScript presentation',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#563d7c', name: 'CSS' },
          isPrivate: false,
          updatedAt: '2019-09-13T18:38:23Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNzQyNDM5OA==',
          name: 'recoverize-wp',
          description: 'The recoverize website',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#4F5D95', name: 'PHP' },
          isPrivate: false,
          updatedAt: '2018-06-15T07:06:54Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNzk1ODQyNg==',
          name: 'cando-zsh',
          description: 'my oh-my-zsh plugin',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#89e051', name: 'Shell' },
          isPrivate: false,
          updatedAt: '2021-05-14T14:38:47Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnk0NjAyNjYwMA==',
          name: 'run-babel-run',
          description:
            'A CLI tool that kicks off your server babeled so u dont have to use lame requires in your root file runtime transpilations ya dig',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2019-09-13T18:33:44Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnk0OTM1NjE3NA==',
          name: 'react-workshop-starter',
          description: 'React / ES6 starter kit for UXDevSummit workshop',
          stargazerCount: 1,
          forkCount: 0,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-05-02T10:43:55Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnk0OTg3ODEyNg==',
          name: 'react-objective-synopsis',
          description: 'React presentation for UX Dev Summit 2016',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-05-07T20:58:23Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnk2MDkzMTQ4Ng==',
          name: 'hapi-rollbar',
          description: 'Hapi plugin for rollbar logging service',
          stargazerCount: 1,
          forkCount: 1,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2019-09-13T18:31:25Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzMTYwNjM5NTU=',
          name: 'gh-users',
          description: 'Implementation of the GitHub user search in React',
          stargazerCount: 1,
          forkCount: 0,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-05-07T20:56:38Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzMTc3MTk4MzY=',
          name: 'tscored',
          description:
            'General utility library written in TypeScript (to practice TS & some other fundamentals)',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
          isPrivate: false,
          updatedAt: '2020-12-03T03:10:28Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzMzExNDc1MjQ=',
          name: 'rnplayground',
          description: 'React Native Playground. Sampling ideas 💡',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#b07219', name: 'Java' },
          isPrivate: false,
          updatedAt: '2021-01-20T00:30:14Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNjEyNzIyNzI=',
          name: 'stock-sniper',
          description: 'monitors large retailers for gpu restock',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-04-30T23:59:45Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNjM2MjU5MjM=',
          name: 'JSM-Detox',
          description:
            'Demo app for JSMarathon presentation: React Native E2E Testing with Detox',
          stargazerCount: 6,
          forkCount: 4,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-11-17T05:58:18Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnkzNzE1MzA2MjQ=',
          name: 'notion-sdk-js',
          description: 'Official Notion JavaScript Client',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
          isPrivate: false,
          updatedAt: '2021-06-02T15:40:16Z',
        },
        {
          id: 'MDEwOlJlcG9zaXRvcnk0MDc2NzcyOTU=',
          name: 'swr-site',
          description: 'The official website for SWR.',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
          isPrivate: false,
          updatedAt: '2021-09-17T20:55:27Z',
        },
        {
          id: 'R_kgDOGO7ROA',
          name: 'with-firebase-user',
          description:
            'A higher order function that decodes a Firebase Auth JWT and decorates the NextJS api request object with a Firebase user',
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
          isPrivate: false,
          updatedAt: '2021-11-13T01:59:23Z',
        },
        {
          id: 'R_kgDOGUNE2A',
          name: 'danecando',
          description: null,
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: null,
          isPrivate: false,
          updatedAt: '2021-11-02T12:43:42Z',
        },
      ],
    },
  },
};
