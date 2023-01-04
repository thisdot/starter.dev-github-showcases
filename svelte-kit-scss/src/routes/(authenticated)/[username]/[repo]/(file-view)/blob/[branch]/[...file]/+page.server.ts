import type { PageServerLoad, PageServerParentData } from './$types';
import { ENV } from '$lib/constants/env';
import type { GithubFileContentsItem, FileContents, GithubBranch } from '$lib/interfaces';
import { mapLanguageExt, remapFileContents } from '$lib/helpers/file';
import Prism from 'prismjs';
import loadPrismLanguages from 'prismjs/components/index';
import { buildContentItemBreadcrumbs, composeDirHref, remapBranchOption } from '$lib/helpers';
import { error } from '@sveltejs/kit';

export const ssr = false;

export const load: PageServerLoad = async ({
  params: { username, repo, branch, file },
  parent,
  fetch,
}) => {
  const getFileContentsUrl = new URL(`/repos/${username}/${repo}/contents/${file}`, ENV.GITHUB_URL);
  getFileContentsUrl.searchParams.append('ref', branch);
  const fileContentsResponse: Response = await fetch(getFileContentsUrl);
  const fileContentsResponseData: GithubFileContentsItem = await fileContentsResponse.json();
  const fileContents: FileContents | undefined = remapFileContents(fileContentsResponseData);

  const extension: string | undefined = fileContents?.name.split('.').pop();
  const language = mapLanguageExt(extension);
  loadPrismLanguages(language);

  const layoutData: PageServerParentData = await parent();
  const { repositoryState } = layoutData;

  if (!file) {
    throw error(404);
  }

  const blobPath = file;
  const folderPathSegments = blobPath.split('/');
  const folderPath = folderPathSegments.join('/');

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
    fileContents,
    prismLanguage: language ? Prism.languages[language] : undefined,
    language: language,
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
