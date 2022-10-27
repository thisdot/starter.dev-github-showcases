import type { PageServerLoad } from './$types';
import { mapUserReposToTopRepos } from "../../lib/helpers";
import type { UserGistsApiResponse, UserReposApiResponse } from "../../lib/interfaces";
import { GITHUB_URL } from '$env/static/private';

export const load: PageServerLoad = async ({fetch, locals}) => {
  const defaultParams = {
    sort: 'updated',
    per_page: '20',
  };

  const repoURL = `${GITHUB_URL}/user/repos`;
  const gistsURL = `${GITHUB_URL}/users/${locals.user.username}/gists`;

  try {
    const reposPromise = await fetch(`${repoURL}?${new URLSearchParams(defaultParams)}`, {
      headers: {
        Authorization: `Bearer ${locals.accessToken}`
      }
    })

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

