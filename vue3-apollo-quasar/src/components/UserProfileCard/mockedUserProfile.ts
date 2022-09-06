import { graphql } from 'msw';
import { userProfileRespose } from './data';

export const mockedUserProfileQuery = graphql.query(
  'UserProfile',
  (_, res, ctx) => {
    return res(ctx.data(userProfileRespose));
  },
);
