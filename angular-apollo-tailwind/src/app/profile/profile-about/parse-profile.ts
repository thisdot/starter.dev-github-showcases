import {
  Org,
  Organization,
  OrgProfileData,
  UserProfile,
  UserProfileData,
} from 'src/app/gql';

export const parseUserQuery = (data: UserProfileData): UserProfile => {
  const user = data.user;
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
      (acc: Organization[], org: Organization) =>
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

export const parseOrgQuery = (data: OrgProfileData): Org => data.organization;
