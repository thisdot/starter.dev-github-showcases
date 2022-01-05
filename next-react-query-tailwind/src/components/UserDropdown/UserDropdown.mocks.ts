import { graphql } from 'msw';

export const mockCurrentUserQuery = graphql.query(
  'CurrentUser',
  (_, res, ctx) => {
    return res(
      ctx.data({
        viewer: {
          avatarUrl: 'https://avatars2.githubusercontent.com/u/17098?v=4',
          login: 'danecando',
          name: 'Dane Grant',
        },
      })
    );
  }
);
