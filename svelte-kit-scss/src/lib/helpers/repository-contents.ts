import type { FileExplorerFolderContentItem } from '$lib/components/FileExplorer/models';
import { GithubRepoContentsItemType } from '$lib/constants/github';
import type { GithubRepoContentsItem } from '$lib/interfaces';

export const composeDirHref = (
  path: string,
  username: string,
  repo: string,
  branch: string,
  defaultBranch: string
) => {
  const repoRootHrefSegments = [username, repo];
  const pathSegments = path.split('/').filter(Boolean);
  const isRootFolder = !pathSegments.length;
  const isDefaultBranch = branch === defaultBranch;
  const hrefSegments =
    isRootFolder && isDefaultBranch
      ? repoRootHrefSegments
      : repoRootHrefSegments.concat(['tree', branch, ...pathSegments]);
  return `/${hrefSegments.join('/')}`;
};

const composeFileHref = (path: string, username: string, repo: string, branch: string) => {
  const hrefSegments = [username, repo, 'blob', branch, path];
  return `/${hrefSegments.join('/')}`;
};

export const remapFileExplorerFolderContentsItem = (
  item: GithubRepoContentsItem,
  username: string,
  repo: string,
  branch: string,
  defaultBranch: string
): FileExplorerFolderContentItem => ({
  name: item.name,
  type: item.type as GithubRepoContentsItemType,
  href:
    item.type === GithubRepoContentsItemType.Dir
      ? composeDirHref(item.path, username, repo, branch, defaultBranch)
      : composeFileHref(item.path, username, repo, branch),
});
