import { ENV } from '$lib/constants/env';
import type { LayoutServerLoad } from './$types';
import type { ReadmeApiResponse, RepoApiResponse } from '$lib/interfaces';
import { mapRepoResToRepoState } from '$lib/helpers';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
  const { username, repo } = params;
  const getRepoUrl = new URL(`/repos/${username}/${repo}`, ENV.GITHUB_URL);
  const getRepoReadmeUrl = new URL(`/repos/${username}/${repo}/readme`, ENV.GITHUB_URL);

  const [repoData, repoReadmeData] = await Promise.all([
    fetch(getRepoUrl.toString()).then((response) => response.json() as Promise<RepoApiResponse>),
    fetch(getRepoReadmeUrl.toString()).then(
      (response) => response.json() as Promise<ReadmeApiResponse>
    ),
  ]);

  return {
    repoInfo: mapRepoResToRepoState(repoData, repoReadmeData),
  };
};
