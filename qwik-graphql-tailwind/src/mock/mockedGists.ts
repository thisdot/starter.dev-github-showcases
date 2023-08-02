import { rest } from 'msw';
import { gistsResponse } from './data';
import { GITHUB_GRAPHQL } from '../utils/constants';

export const mockedGistsQuery = rest.post(GITHUB_GRAPHQL, (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(gistsResponse));
});
