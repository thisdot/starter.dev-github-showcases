import type { PageServerLoad, PageServerParentData } from './$types';
import { ENV } from '$lib/constants/env';
import type { FileContents } from '$lib/interfaces';
import type { GithubFileContentsItem } from '$lib/interfaces/data-contract/github';
import { mapLanguageExt, remapFileContents } from '$lib/helpers/file';
import Prism from 'prismjs';
import loadPrismLanguages from 'prismjs/components/index';
import { buildContentItemBreadcrumbs, buildRepositoryFolderBranchOptions } from '$lib/helpers';
import { error } from '@sveltejs/kit';
import { BranchService } from '$lib/services';

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
    fileContents,
    prismLanguage: language ? Prism.languages[language] : undefined,
    language: language,
    branches,
    defaultBranch: repositoryState.defaultBranch,
    currentBranch: branch,
    breadcrumbs,
  };
};
