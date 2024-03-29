import type { GithubRepoContentsItemType } from '$lib/constants/github';

export interface FileExplorerFolderContentItem {
  name: string;
  type: GithubRepoContentsItemType;
  href: string;
}

export interface BranchOption {
  name: string;
  href: string;
}
