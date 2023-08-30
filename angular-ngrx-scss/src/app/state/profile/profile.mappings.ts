import { UserApiResponse, UserState } from '../user';
import {
  ProfileState,
  UserOrgsApiResponse,
  UserOrgsState,
  UserReposApiResponse,
  UserReposState,
} from './profile.state';

export function profileApiToUserStateMapping(
  userData: UserApiResponse,
  orgsData: UserOrgsApiResponse,
  reposData: UserReposApiResponse,
): ProfileState {
  const user: UserState = {
    avatar: userData.avatar_url,
    bio: userData.bio,
    blog: userData.blog,
    company: userData.company,
    email: userData.email,
    followers: userData.followers,
    following: userData.following,
    location: userData.location,
    name: userData.name,
    twitterUsername: userData.twitter_username,
    username: userData.login,
    type: userData.type,
  };
  const orgs: UserOrgsState[] = orgsData.map((org) => ({
    id: org.id,
    login: org.login,
    avatar_url: org.avatar_url,
  }));
  const repos: UserReposState[] = reposData.map((repo) => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    private: repo.private,
    updated_at: repo.updated_at,
    fork: repo.fork,
    archived: repo.archived,
    license: repo.license
      ? {
          key: repo.license.key,
          name: repo.license.name,
          spdx_id: repo.license.spdx_id,
          url: repo.license.url,
          node_id: repo.license.node_id,
        }
      : null,
    owner: {
      login: repo.owner.login,
    },
  }));

  return { user, orgs, repos };
}
