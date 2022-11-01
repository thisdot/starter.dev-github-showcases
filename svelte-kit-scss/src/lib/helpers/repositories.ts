import type {UserReposApiResponse, UserReposState} from "../interfaces";

export const mapUserReposToTopRepos = (repos: UserReposApiResponse): UserReposState[] => {

  if (repos) {
    return repos.map((repo) => ({
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
  }
  return []
}
