import { Organization, UserProfile, UserProfileData } from 'src/app/gql';

export function parseQuery(data?: UserProfileData): UserProfile | undefined {
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
      (acc: Organization[], org: any) =>
        org ? [...acc, { avatarUrl: org.avatarUrl, login: org.login }] : acc,
      [],
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
