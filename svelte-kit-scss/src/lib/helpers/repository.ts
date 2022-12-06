import type { GithubRepository, RepoState } from '$lib/interfaces';

export const mapRepoResToRepoState = (
  data: GithubRepository,
  openPullRequestsCount: number
): RepoState => {
  return {
    defaultBranch: data.default_branch,
    description: data.description,
    forkCount: data.forks_count,
    openIssuesCount: data.open_issues_count,
    openPullRequestsCount,
    ownerName: data.owner.login,
    repoName: data.name,
    starCount: data.stargazers_count,
    tags: data.topics,
    visibility: data.visibility,
    watchCount: data.watchers_count,
    website: data.homepage,
  };
};
