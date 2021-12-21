import { graphql } from 'msw';

export const mockRepoPageQuery = graphql.query('RepoPage', (req, res, ctx) => {
  const { name, owner } = req.variables;

  if (name !== 'testrepo' && owner !== 'testowner') {
    return res(
      ctx.errors([
        {
          type: 'NOT_FOUND',
          path: ['repository'],
          locations: [
            {
              line: 3,
              column: 3,
            },
          ],
          message: `Could not resolve to a Repository with the name '${owner}/${name}'.`,
        },
      ])
    );
  }

  return res(ctx.data(repoResponse));
});

//
// Mocked responses
//

const repoResponse = {
  repository: {
    defaultBranchRef: { name: 'main' },
    isPrivate: false,
    stargazerCount: 5,
    forkCount: 3,
    description:
      'Demo app for JSMarathon presentation: React Native E2E Testing with Detox',
    watchers: { totalCount: 2 },
    issues: { totalCount: 10 },
    pullRequests: { totalCount: 5 },
  },
};
