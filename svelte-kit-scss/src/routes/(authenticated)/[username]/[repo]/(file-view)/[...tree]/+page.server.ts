import { ENV } from '$lib/constants/env';
import {
  buildContentItemBreadcrumbs,
  buildMarkdownPreviewHtml,
  buildRepositoryFolderBranchOptions,
  composeDirHref,
  remapFileExplorerFolderContentsItem,
} from '$lib/helpers';
import type {
  GithubFileContentsItem,
  GithubRepoContentsItem,
} from '$lib/interfaces/data-contract/github';
import { BranchService } from '$lib/services';
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

  const readmeData = await fetch(getRepoReadmeUrl).then((response) =>
    response.ok ? (response.json() as Promise<GithubFileContentsItem>) : Promise.resolve(undefined)
  );

  const branchService = new BranchService(fetch);
  const repositoryBranches = await branchService.getBranchesForRepository(username, repo);
  const branches = buildRepositoryFolderBranchOptions(
    folderPath,
    username,
    repo,
    repositoryBranches,
    repositoryState.defaultBranch
  );

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
    readmeHtml: readmeData ? buildMarkdownPreviewHtml(readmeData) : String(),
    branches,
    defaultBranch: repositoryState.defaultBranch,
    currentBranch: branch,
    breadcrumbs,
  };
};
