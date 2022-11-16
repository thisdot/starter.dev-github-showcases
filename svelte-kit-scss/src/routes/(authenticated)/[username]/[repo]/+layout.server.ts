import { ENV } from '$lib/constants/env';
import type { LayoutServerLoad } from './$types';
import type { PullRequestAPIResponse, RepoApiResponse } from '$lib/interfaces';
import { mapRepoResToRepoState, remapRepoPullRequestCollection } from '$lib/helpers';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
  const { username, repo } = params;
  const getRepoUrl = new URL(`/repos/${username}/${repo}`, ENV.GITHUB_URL);

  const getOpenRepoPullsUrl = new URL(`/search/issues`, ENV.GITHUB_URL);
  getOpenRepoPullsUrl.searchParams.append('q', `repo:${username}/${repo} is:pr is:open`);
  getOpenRepoPullsUrl.searchParams.append('per_page', '1');

  const [repoData, openRepoPullsCollection] = await Promise.all([
    fetch(getRepoUrl.toString()).then((response) => response.json() as Promise<RepoApiResponse>),
    fetch(getOpenRepoPullsUrl.toString()).then(
      (response) => response.json() as Promise<PullRequestAPIResponse>
    ),
  ]);

  const pullsCollection = remapRepoPullRequestCollection(openRepoPullsCollection);

  return {
    username,
    repo,
    repoInfo: mapRepoResToRepoState(repoData, pullsCollection.totalCount),
  };
};
