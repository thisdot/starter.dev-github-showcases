import type { FileExplorerFolderContentItem } from '$lib/components/FileExplorer/models';
import type { GithubRepoContentsItemType } from '$lib/constants/github';
import type { RepoApiResponse, GithubRepoContentsItem, RepoState } from '$lib/interfaces';

export const mapRepoResToRepoState = (
  data: RepoApiResponse,
  openPullRequestsCount: number
): RepoState => {
  return {
    repoName: data.name,
    description: data.description,
    website: data.homepage,
    visibility: data.visibility,
    watchCount: data.watchers_count,
    starCount: data.stargazers_count,
    forkCount: data.forks_count,
    openIssuesCount: data.open_issues_count,
    openPullRequestsCount,
    tags: data.topics,
    defaultBranch: data.default_branch,
    ownerName: data.owner.login,
  };
};
