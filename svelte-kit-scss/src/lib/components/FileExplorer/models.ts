import type { GithubRepoContentsItemType } from '$lib/constants/github';

export interface FileExplorerFolderContentItem {
  name: string;
  type: GithubRepoContentsItemType;
  href: string;
}
