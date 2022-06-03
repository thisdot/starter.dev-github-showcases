import { RepoOrganization, UserProfile, UserProfileQuery } from '../../gql';

export const parseUserQuery = (
  data: UserProfileQuery,
): UserProfile | undefined => {
  const user = data.user;

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

  const nodes = organizations.nodes as RepoOrganization[];
  const orgs =
    nodes.reduce(
      (acc: RepoOrganization[], org: RepoOrganization) =>
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
};
