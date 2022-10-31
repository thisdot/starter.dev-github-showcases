import type { PageServerLoad } from './$types';
import { mapUserReposToTopRepos } from "$lib/helpers";
import type { UserGistsApiResponse, UserReposApiResponse } from "$lib/interfaces";
import { ENV } from '$lib/constants/env';

export const load: PageServerLoad = async ({fetch, parent}) => {

  const repoURL = new URL('/user/repos', ENV.GITHUB_URL);
  repoURL.searchParams.append('sort', 'updated');
  repoURL.searchParams.append('per_page', '20');

  const { userInfo } = await parent();

  const gistsURL = new URL(`/users/${userInfo?.username}/gists`, ENV.GITHUB_URL);

  try {
    const reposPromise = await fetch(repoURL);

    const gistsPromise = await fetch(gistsURL);

    const data = await Promise.all([reposPromise, gistsPromise])

    const gists = (await data[1].json()) as UserGistsApiResponse;

    const repos = (await data[0].json()) as UserReposApiResponse;

    return {
      topRepos: (mapUserReposToTopRepos(repos)),
      gists
    }
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {}
  }
}

