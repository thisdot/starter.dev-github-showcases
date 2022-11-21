import { ENV } from '$lib/constants/env';
import {
  composeDirHref,
  remapBranchOption,
  remapFileExplorerFolderContentsItem,
} from '$lib/helpers';
import type { ReadmeApiResponse, GithubRepoContentsItem, GithubBranch } from '$lib/interfaces';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, PageServerParentData } from './$types';

export const load: PageServerLoad = async ({ params, parent, fetch }) => {
  const layoutData: PageServerParentData = await parent();
  const { repoInfo, username, repo } = layoutData;
  const treePath = params.tree || `tree/${repoInfo.defaultBranch}`;
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
    : composeDirHref(parentFolderPath, username, repo, branch, repoInfo.defaultBranch);
  const contents = contentsData.map((item) =>
    remapFileExplorerFolderContentsItem(item, username, repo, branch, repoInfo.defaultBranch)
  );

  const readmeData = await fetch(getRepoReadmeUrl).then(
    (response) => response.json() as Promise<ReadmeApiResponse>
  );

  const getRepoBranchesUrl = new URL(`/repos/${username}/${repo}/branches`, ENV.GITHUB_URL);

  const branches = await fetch(getRepoBranchesUrl).then(
    (response) => response.json() as Promise<GithubBranch>
  );

  if (!Array.isArray(branches)) {
    throw error(400, 'Unable to fetch branches');
  }

  return {
    ...layoutData,
    parentHref,
    contents,
    readme: readmeData.content,
    branches: branches.map((branch) =>
      remapBranchOption(branch, (branchName: string) =>
        composeDirHref(folderPath, username, repo, branchName, repoInfo.defaultBranch)
      )
    ),
    defaultBranch: repoInfo.defaultBranch,
    currentBranch: branch,
  };
};
