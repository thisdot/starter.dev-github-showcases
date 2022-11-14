import type {
  // ReadmeApiResponse,
  RepoApiResponse,
  RepoContents,
  RepoContentsApiResponse,
  RepoState,
} from '$lib/interfaces';

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
    //readme: readmeData.content,
    //tree: alignTreeFolderFirst(mapRepoContentsApiToRepoContent(contents)),
  };
};

export const mapRepoContentsApiToRepoContent = (
  contents: RepoContentsApiResponse[]
): RepoContents[] => {
  return contents.map((value) => ({
    name: value.name,
    type: value.type,
    path: value.path,
  }));
};

export const alignTreeFolderFirst = (contents: RepoContents[]): RepoContents[] => {
  const fileItems: RepoContents[] = [];
  const dirItems: RepoContents[] = [];

  contents.forEach((item) => {
    if (item.type === 'dir') {
      dirItems.push(item);
    } else {
      fileItems.push(item);
    }
  });

  return dirItems.concat(fileItems);
};
