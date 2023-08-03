import { GithubRepoContentsItemType } from '$lib/constants/github';
import type { FileExplorerFolderContentItem } from './models';

export const sortFolderContentItems = (
  items: FileExplorerFolderContentItem[]
): FileExplorerFolderContentItem[] => {
  const itemsSorted = items.sort((a, b) => a.name.localeCompare(b.name));
  const dirs = itemsSorted.filter((x) => x.type === GithubRepoContentsItemType.Dir);
  const other = itemsSorted.filter((x) => x.type !== GithubRepoContentsItemType.Dir);
  return dirs.concat(other);
};
