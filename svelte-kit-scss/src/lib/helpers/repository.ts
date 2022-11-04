import type {
  ReadmeApiResponse,
  RepoApiResponse,
  RepoContents,
  RepoContentsApiResponse,
  RepoState,
} from '$lib/interfaces';

export const mapRepoResToRepoState = (
  data: RepoApiResponse,
  prCount: number,
  contents: RepoContentsApiResponse[],
  readmeData: ReadmeApiResponse
): RepoState => {
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
    ownerName: data.owner.login,
    prCount,
    readme: readmeData.content,
    tree: alignTreeFolderFirst(mapRepoContentsApiToRepoContent(contents)),
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
