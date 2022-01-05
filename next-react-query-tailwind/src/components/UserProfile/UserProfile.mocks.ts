import { graphql } from 'msw';

export const mockUserProfileQuery = graphql.query(
  'UserProfile',
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

    return res(ctx.data(profileResponse));
  }
);

//
// Mocked responses
//

const profileResponse = {
  user: {
    avatarUrl:
      'https://avatars.githubusercontent.com/u/3721977?u=e74a006235af822414fb83b714612db5f6bf8092&v=4',
    bio: 'mostly javascript stuff and occasionally other things',
    company: '@thisdot',
    followers: { totalCount: 98 },
    following: { totalCount: 19 },
    location: 'Lexington, KY',
    login: 'danecando',
    name: 'Dane Grant',
    starredRepositories: { totalCount: 13 },
    twitterUsername: 'danecando',
    websiteUrl: null,
    organizations: {
      nodes: [
        {
          avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          login: 'thisdot',
        },
      ],
    },
  },
};
