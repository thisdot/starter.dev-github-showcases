import { graphql } from 'msw';

export const mockOrgProfileQuery = graphql.query(
  'OrgProfile',
  (req, res, ctx) => {
    const { username } = req.variables;

    if (username !== 'vercel') {
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
            message: `Could not resolve to an Organization with the login of '${username}'.`,
          },
        ])
      );
    }

    return res(ctx.data(orgResponse));
  }
);

//
// Mocked responses
//

const orgResponse = {
  organization: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/14985020?v=4',
    name: 'Vercel',
  },
};
