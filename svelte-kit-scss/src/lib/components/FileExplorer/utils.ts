import { GithubRepoContentsItemType } from '$lib/constants/github';
import type { RepoFolderContentItem } from './models';

export const sortFolderContentItems = (items: RepoFolderContentItem[]): RepoFolderContentItem[] => {
  const itemsSorted = items.sort((a, b) => a.name.localeCompare(b.name));
  const dirs = itemsSorted.filter((x) => x.type === GithubRepoContentsItemType.Dir);
  const other = itemsSorted.filter((x) => x.type !== GithubRepoContentsItemType.Dir);
  return dirs.concat(other);
};
