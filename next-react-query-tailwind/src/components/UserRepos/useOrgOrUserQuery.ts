import { useUserReposQuery, useOrgReposQuery } from '@lib/github';

export function useOrgOrUserQuery(isOrg: boolean) {
  return isOrg ? useOrgReposQuery : useUserReposQuery;
}
