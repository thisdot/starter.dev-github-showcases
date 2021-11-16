import type { UserProfileQuery } from '@lib/github';
import type { Organization } from './types';
import type { UserProfileViewProps } from './UserProfile.view';

export function parseQuery(
  data?: UserProfileQuery
): UserProfileViewProps | undefined {
  const user = data?.user;
  if (!user) {
    return undefined;
  }

  const {
    organizations,
    followers,
    following,
    starredRepositories,
    login,
    ...rest
  } = user;

  const orgs =
    organizations.nodes?.reduce(
      (acc: Organization[], org) =>
        org ? [...acc, { avatarUrl: org.avatarUrl, login: org.login }] : acc,
      []
    ) ?? [];

  return {
    ...rest,
    organizations: orgs,
    followers: followers.totalCount,
    following: following.totalCount,
    starredRepos: starredRepositories.totalCount,
    username: login,
  };
}
