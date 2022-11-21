import { rest } from 'msw';
import { IssuesResponse } from './data';
import { GITHUB_GRAPHQL } from '../utils/constants';

export const mockedIssuesQuery = rest.post(GITHUB_GRAPHQL, (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(IssuesResponse));
});
