import type { RepoApiResponse, RepoState } from '$lib/interfaces';

export const mapRepoResToRepoState = (data: RepoApiResponse): RepoState => {
  return {
    repoName: data.name,
    description: data.description,
    website: data.homepage,
    visibility: data.visibility,
    watchCount: data.watchers_count,
    starCount: data.stargazers_count,
    forkCount: data.forks_count,
    issueCount: data.open_issues_count,
    tags: data.topics,
    selectedFile: null,
    openPullRequests: null,
    closedPullRequests: null,
    activeBranch: data.default_branch,
    ownerName: '',
    prCount: 0,
    readme: '',
    tree: [],
  };
};
