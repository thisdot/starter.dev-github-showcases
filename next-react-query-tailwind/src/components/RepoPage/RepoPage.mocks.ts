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
    homepageUrl: 'https://www.youtube.com/watch?v=Vm085szsz_M',
    topics: {
      nodes: [
        {
          id: 'MDE1OlJlcG9zaXRvcnlUb3BpYzIzNzI5MTgz',
          topic: { name: 'e2e-tests' },
        },
        {
          id: 'MDE1OlJlcG9zaXRvcnlUb3BpYzIzNzI5MTg0',
          topic: { name: 'detox' },
        },
        {
          id: 'MDE1OlJlcG9zaXRvcnlUb3BpYzIzNzI5MTg1',
          topic: { name: 'react-native' },
        },
        {
          id: 'MDE1OlJlcG9zaXRvcnlUb3BpYzIzNzI5MTky',
          topic: { name: 'pizza' },
        },
        {
          id: 'MDE1OlJlcG9zaXRvcnlUb3BpYzIzNzI5MTk3',
          topic: { name: 'jsmarathon' },
        },
      ],
    },
  },
};
