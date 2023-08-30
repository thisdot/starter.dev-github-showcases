import { UserApiResponse, UserState } from '../user';
import { userReposApiToUserRepoStateMapping } from '../user/user.mappings';
import {
  ProfileState,
  UserOrgsApiResponse,
  UserOrgsState,
  UserReposApiResponse,
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
  const repos = userReposApiToUserRepoStateMapping(reposData);

  return { user, orgs, repos };
}
