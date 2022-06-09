const { graphql } = require('msw');

const handlers = [
  graphql.query('CurrentUser', (req, res, ctx) => {
    return res(
      ctx.data({
        viewer: {
          id: 'TESTUSERID',
          avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          login: 'TestUser',
          name: 'Test User',
          __typename: 'User',
        },
      })
    );
  }),
  graphql.query('UserGists', (req, res, ctx) => {
    return res(
      ctx.data({
        viewer: { gists: { nodes: [] } },
      })
    );
  }),
  graphql.query('UserTopRepos', (req, res, ctx) => {
    return res(
      ctx.data({
        viewer: {
          id: 'TESTUSERID',
          login: 'TestUser',
          topRepositories: {
            nodes: [
              null,
              null,
              {
                id: 'R_kgDOGd0nuw',
                name: 'starter.dev-github-showcases',
                description: 'A collection of GitHub clone implementations.',
                owner: {
                  login: 'thisdot',
                  __typename: 'Organization',
                },
                primaryLanguage: {
                  name: 'TypeScript',
                  color: '#2b7489',
                  __typename: 'Language',
                },
                isPrivate: false,
                stargazerCount: 28,
                forkCount: 5,
                updatedAt: '2022-04-22T12:56:09Z',
                __typename: 'Repository',
              },
              {
                id: 'R_kgDOGRodQQ',
                name: 'framework.dev',
                description: null,
                owner: {
                  login: 'thisdot',
                  __typename: 'Organization',
                },
                primaryLanguage: {
                  name: 'TypeScript',
                  color: '#2b7489',
                  __typename: 'Language',
                },
                isPrivate: false,
                stargazerCount: 27,
                forkCount: 6,
                updatedAt: '2022-05-07T12:19:57Z',
                __typename: 'Repository',
              },
            ],
            __typename: 'RepositoryConnection',
          },
          __typename: 'User',
        },
      })
    );
  }),
];

module.exports = {
  handlers,
};
