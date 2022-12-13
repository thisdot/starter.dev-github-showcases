import type { Repository, RepositoryLicenseSimple, RepositoryState } from '$lib/interfaces';
import type {
  GithubRepository,
  GithubRepositoryLicenseSimple,
} from '$lib/interfaces/data-contract/github';
import { remapSimpleUser, resolveRepositoryHref } from '$lib/helpers';
import type { RepositoryCardViewModel } from '$lib/components/RepositoryList/view-models';

export const remapRepositoryLicenseSimple = (
  license: GithubRepositoryLicenseSimple
): RepositoryLicenseSimple => ({
  name: license.name,
});

export const remapRepository = (repository: GithubRepository): Repository => ({
  defaultBranch: repository.default_branch,
  description: repository.description,
  forksCount: repository.forks_count,
  homepage: repository.homepage,
  name: repository.name,
  openIssuesCount: repository.open_issues_count,
  owner: remapSimpleUser(repository.owner),
  stargazersCount: repository.stargazers_count,
  topics: repository.topics,
  visibility: repository.visibility,
  watchersCount: repository.watchers_count,
  language: repository.language,
  updatedAt: repository.updated_at,
  license: repository.license ? remapRepositoryLicenseSimple(repository.license) : null,
  archived: repository.archived,
  fork: repository.fork,
});

export const buildRepositoryState = (
  repository: Repository,
  openPullRequestsCount: number
): RepositoryState => {
  return {
    ...repository,
    openPullRequestsCount,
  };
};

export const buildRepositoryCardViewModel = (repository: Repository): RepositoryCardViewModel => ({
  ...repository,
  routeHref: resolveRepositoryHref(repository),
});
