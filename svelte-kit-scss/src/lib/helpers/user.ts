import type {
  UserApiResponse,
  UserInfo,
  UserOrgsApiResponse,
  UserOrgs,
  UserReposState,
  UserReposApiResponse,
} from '../interfaces';

export const mapUserInfoResponseToUserInfo = (user?: UserApiResponse): UserInfo | undefined => {
  return user
    ? {
        avatar: user.avatar_url,
        bio: user.bio || '',
        blog: user.blog,
        company: user.company || '',
        email: user.email || '',
        followers: user.followers,
        following: user.following,
        location: user.location || '',
        name: user.name,
        twitter_username: user.twitter_username || '',
        username: user.login,
        type: user.type,
      }
    : undefined;
};

export const mapUserOrgsApiResponseToUserOrgs = (userOrgs: UserOrgsApiResponse): UserOrgs[] => {
  return Array.isArray(userOrgs)
    ? userOrgs.map((org) => ({
        id: org.id,
        login: org.login,
        avatar_url: org.avatar_url,
      }))
    : [];
};

export const mapUserReposApiResponseToUserReposStates = (
  userRepos: UserReposApiResponse
): UserReposState[] => {
  return Array.isArray(userRepos)
    ? userRepos.map((repo) => ({
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
      }))
    : [];
};
