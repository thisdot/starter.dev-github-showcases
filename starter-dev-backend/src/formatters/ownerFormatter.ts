import { Owner } from '../types';

export const ownerFormatter = (owner: Owner) => {
  if (!owner) {
    return null;
  }

  return {
    bio: owner.bio,
    company: owner.company,
    email: owner.email,
    followers: owner.followers,
    following: owner.following,
    location: owner.location,
    login: owner.login,
    name: owner.name,
    orgs: owner.orgs,
    starCount: owner.starred_url,
    twitterUsername: owner.twitter_username,
  };
};
