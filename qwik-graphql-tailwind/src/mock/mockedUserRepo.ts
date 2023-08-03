import { rest } from 'msw';
import { repos } from './data';
import { GITHUB_GRAPHQL } from '../utils/constants';

export const mockedUserReposQuery = rest.post(GITHUB_GRAPHQL, (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(repos));
});
