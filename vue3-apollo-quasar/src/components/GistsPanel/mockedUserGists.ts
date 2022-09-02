import { graphql } from 'msw';
import { gistsResponse } from './data';

export const mockedUserGistsQuery = graphql.query(
  'UserGists',
  (_, res, ctx) => {
    return res(ctx.data(gistsResponse));
  },
);
