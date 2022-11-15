import type { RepoFolderData } from '$lib/components/FileExplorer/models';
import { ENV } from '$lib/constants/env';
import { remapRepoFolderContentItem } from '$lib/helpers';
import type { ReadmeApiResponse, RepoContentsApiResponse } from '$lib/interfaces';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, PageServerParentData } from './$types';

export const load: PageServerLoad = async ({ params, parent, fetch }) => {
  const layoutData: PageServerParentData = await parent();
  const { repoInfo, username, repo } = layoutData;
  const treePath = params.tree || `tree/${repoInfo.defaultBranch}`;

  const [, branch, ...folderPathSegments] = treePath.split('/');
  const folderPath = folderPathSegments.join('/');

  const isRoot = !folderPathSegments.length;

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
    throw error(contentsDataResponse.status, contentsData.message); // todo: Not Found Page
  }

  const contentsData = (await contentsDataResponse.json()) as RepoContentsApiResponse[];

  const folder: RepoFolderData = {
    path: folderPath,
    contents: contentsData.map(remapRepoFolderContentItem),
  };

  const readmeData = await fetch(getRepoReadmeUrl).then(
    (response) => response.json() as Promise<ReadmeApiResponse>
  );

  return {
    ...layoutData,
    readme: readmeData.content,
    folder,
    isRoot,
  };
};
