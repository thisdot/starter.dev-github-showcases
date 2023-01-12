import type { FileExplorerFolderContentItem } from '$lib/components/FileExplorer/models';
import { GithubRepoContentsItemType } from '$lib/constants/github';
import type { GithubFileContentsItem, GithubRepoContentsItem } from '$lib/interfaces';
import { compile } from 'mdsvex';

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

export const MARKDOWN_ALLOWED_ENCODING: BufferEncoding[] = [
  'ascii',
  'utf8',
  'utf-8',
  'utf16le',
  'ucs2',
  'ucs-2',
  'base64',
  'base64url',
  'latin1',
  'binary',
  'hex',
];

/** **Use only on server side!** */
export const buildMarkdownPreviewHtml = async (
  file: GithubFileContentsItem
): Promise<string | undefined> => {
  const { content, encoding } = file;
  const bufferEncoding = MARKDOWN_ALLOWED_ENCODING.find((x) => x === encoding);
  if (!bufferEncoding) {
    console.warn(`Unsupported encoding: ${bufferEncoding}`);
    return content;
  }
  const decoded = Buffer.from(content, bufferEncoding).toString('utf8');
  const compiledResponse = await compile(decoded);

  return compiledResponse?.code;
};
