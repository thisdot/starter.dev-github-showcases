import { graphql } from 'msw';
import { orgProfile, orgRepos } from './data';

export const mockedOrgProfileQuery = graphql.query(
  'OrgsProfile',
  (_, res, ctx) => {
    return res(ctx.data(orgProfile));
  },
);
export const mockedOrgRepoQuery = graphql.query(
  'OrganizationRepos',
  (_, res, ctx) => {
    return res(ctx.data(orgRepos));
  },
);
