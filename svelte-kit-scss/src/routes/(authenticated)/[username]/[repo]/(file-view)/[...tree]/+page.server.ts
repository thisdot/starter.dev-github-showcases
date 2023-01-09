import { ENV } from '$lib/constants/env';
import {
  buildContentItemBreadcrumbs,
  buildMarkdownPreviewHtml,
  composeDirHref,
  remapBranchOption,
  remapFileExplorerFolderContentsItem,
} from '$lib/helpers';
import type { GithubFileContentsItem, GithubRepoContentsItem, GithubBranch } from '$lib/interfaces';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, PageServerParentData } from './$types';

export const load: PageServerLoad = async ({ params: { username, repo, tree }, parent, fetch }) => {
  const layoutData: PageServerParentData = await parent();
  const { repositoryState } = layoutData;
  const treePath = tree || `tree/${repositoryState.defaultBranch}`;
  const [, branch, ...folderPathSegments] = treePath.split('/');
  const folderPath = folderPathSegments.join('/');

  const getRepoContentsUrl = new URL(
    `/repos/${username}/${repo}/contents/${folderPath}`,
    ENV.GITHUB_URL
  );
  getRepoContentsUrl.searchParams.append('ref', branch);
  const getRepoReadmeUrl = new URL(
    `/repos/${username}/${repo}/readme/${folderPath}`,
    ENV.GITHUB_URL
  );

  const contentsDataResponse = await fetch(getRepoContentsUrl);
  if (!contentsDataResponse.ok) {
    const contentsData = (await contentsDataResponse.json()) as { message: string };
    const errorMessage =
      contentsDataResponse.status === 404
        ? `The '${username}/${repo}' repository doesn't contain the '${
            folderPathSegments.slice(-1)[0] || ''
          }' path in '${branch}'.`
        : contentsData.message;
    throw error(contentsDataResponse.status, errorMessage);
  }
  const contentsData = (await contentsDataResponse.json()) as GithubRepoContentsItem[];

  const isRoot = !folderPathSegments.length;
  const parentFolderPath = folderPathSegments.slice(0, -1).join('/');
  const parentHref = isRoot
    ? undefined
    : composeDirHref(parentFolderPath, username, repo, branch, repositoryState.defaultBranch);
  const contents = contentsData.map((item) =>
    remapFileExplorerFolderContentsItem(item, username, repo, branch, repositoryState.defaultBranch)
  );

  const readmeData = await fetch(getRepoReadmeUrl).then(
    (response) => response.json() as Promise<GithubFileContentsItem>
  );

  const getRepoBranchesUrl = new URL(`/repos/${username}/${repo}/branches`, ENV.GITHUB_URL);

  const branches = await fetch(getRepoBranchesUrl).then(
    (response) => response.json() as Promise<GithubBranch>
  );

  if (!Array.isArray(branches)) {
    throw error(400, 'Unable to fetch branches');
  }

  const breadcrumbs = buildContentItemBreadcrumbs(
    username,
    repo,
    branch,
    repositoryState.defaultBranch,
    folderPathSegments
  );

  return {
    ...layoutData,
    parentHref,
    contents,
    readmeHtml: buildMarkdownPreviewHtml(readmeData),
    branches: branches.map((branch) =>
      remapBranchOption(branch, (branchName: string) =>
        composeDirHref(folderPath, username, repo, branchName, repositoryState.defaultBranch)
      )
    ),
    defaultBranch: repositoryState.defaultBranch,
    currentBranch: branch,
    breadcrumbs,
  };
};
