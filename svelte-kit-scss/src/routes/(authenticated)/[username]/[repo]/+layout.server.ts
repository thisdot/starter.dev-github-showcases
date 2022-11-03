import { ENV } from '$lib/constants/env';
import type { LayoutServerLoad } from './$types';
import type { RepoApiResponse } from '$lib/interfaces';
import { mapRepoResToRepoState } from '$lib/helpers';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
  const { username, repo } = params;
  const getContextUserUrl = new URL(`/repos/${username}/${repo}`, ENV.GITHUB_URL);
  const response = await fetch(getContextUserUrl.toString());
  const repoData = (await response.json()) as RepoApiResponse;
  return {
    repoInfo: mapRepoResToRepoState(repoData),
  };
};
