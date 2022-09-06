import { graphql } from 'msw';
import { profileRepoData } from './data';

export const mockedProfileRepoQuery = graphql.query(
  'UserRepos',
  (_, res, ctx) => {
    return res(ctx.data(profileRepoData));
  },
);
