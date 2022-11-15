import type { GithubRepoContentsItemType } from '$lib/constants/github';

export interface RepoFolderData {
  path: string;
  contents: RepoFolderContentItem[];
}

export interface RepoFolderContentItem {
  name: string;
  type: GithubRepoContentsItemType;
  path: string;
}
