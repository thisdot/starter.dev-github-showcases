import { ENV } from '$lib/constants/env';
import type { LayoutServerLoad } from './$types';
import type { ReadmeApiResponse, RepoApiResponse, RepoContentsApiResponse } from '$lib/interfaces';
import { mapRepoResToRepoState } from '$lib/helpers';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
  const { username, repo } = params;
  const getRepoUrl = new URL(`/repos/${username}/${repo}`, ENV.GITHUB_URL);
  const getRepoPullsUrl = new URL(`/repos/${username}/${repo}/pulls`, ENV.GITHUB_URL);
  const getRepoContentsUrl = new URL(`/repos/${username}/${repo}/contents`, ENV.GITHUB_URL);
  const getRepoReadmeUrl = new URL(`/repos/${username}/${repo}/readme`, ENV.GITHUB_URL);
  // const getRepoContentsUrl = path
  //   ? new URL(`/repos/${username}/${repo}/contents`, ENV.GITHUB_URL);
  //   : new URL(`/repos/${username}/${repo}/contents/${repoPath}`, ENV.GITHUB_URL);

  const [repoData, repoPRs, repoContentsData, repoReadmeData] = await Promise.all([
    fetch(getRepoUrl.toString()).then((response) => response.json() as Promise<RepoApiResponse>),
    fetch(getRepoPullsUrl.toString()).then((response) => response.json() as Promise<[]>),
    fetch(getRepoContentsUrl.toString()).then(
      (response) => response.json() as Promise<RepoContentsApiResponse[]>
    ),
    fetch(getRepoReadmeUrl.toString()).then(
      (response) => response.json() as Promise<ReadmeApiResponse>
    ),
  ]);

  return {
    username,
    repo,
    repoInfo: mapRepoResToRepoState(repoData, repoPRs.length, repoContentsData, repoReadmeData),
  };
};
