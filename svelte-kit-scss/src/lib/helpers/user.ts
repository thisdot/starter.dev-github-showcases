import type {UserApiResponse, UserInfo, UserOrgsApiResponse, UserOrgs} from "../interfaces";


export const mapUserInfoResponseToUserInfo = (user: UserApiResponse): UserInfo => {
  return ({
    avatar: user.avatar_url,
    bio: user.bio || "",
    blog: user.blog,
    company: user.company || "",
    email: user.email || "",
    followers: user.followers,
    following: user.following,
    location: user.location,
    name: user.name,
    twitter_username: user.twitter_username || "",
    username: user.login,
    type: user.type,
  });
}

export const mapUserOrgsApiResponseToUserOrgs = (userOrgs: UserOrgsApiResponse): UserOrgs[] => {
  return userOrgs.map((org) => ({
    id: org.id,
    login: org.login,
    avatar_url: org.avatar_url,
  }));
}
