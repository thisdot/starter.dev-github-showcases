import { ENV } from '$lib/constants/env';
import { alignTreeFolderFirst, mapRepoContentsApiToRepoContent } from '$lib/helpers';
import type { ReadmeApiResponse, RepoContentsApiResponse } from '$lib/interfaces';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent, fetch }) => {
  const { username, repo } = params;
  const { repoInfo } = await parent();
  const treePath = params.tree || `tree/${repoInfo.defaultBranch}`;

  const [, branch, ...folderPathSegments] = treePath.split('/');
  const folderPath = folderPathSegments.join('/');
  console.log('folderPath', folderPath);

  const getRepoContentsUrl = new URL(
    `/repos/${username}/${repo}/contents/${folderPath}`,
    ENV.GITHUB_URL
  );
  getRepoContentsUrl.searchParams.append('ref', branch);
  const getRepoReadmeUrl = new URL(
    `/repos/${username}/${repo}/readme/${folderPath}`,
    ENV.GITHUB_URL
  );
  const [contentsData, readmeData] = await Promise.all([
    fetch(getRepoContentsUrl.toString()).then(
      (response) => response.json() as Promise<RepoContentsApiResponse[]>
    ),
    fetch(getRepoReadmeUrl.toString()).then(
      (response) => response.json() as Promise<ReadmeApiResponse>
    ),
  ]);

  const tree = alignTreeFolderFirst(mapRepoContentsApiToRepoContent(contentsData));

  return {
    readme: readmeData.content,
    tree,
  };
  // if (post) {
  //   return post;
  // }

  // throw error(404, 'Not found');
};
