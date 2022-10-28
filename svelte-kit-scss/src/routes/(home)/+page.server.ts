import type {PageServerLoad} from './$types';
import {mapUserReposToTopRepos} from "../../lib/helpers";
import type {UserReposApiResponse} from "../../lib/interfaces";

export const load: PageServerLoad = async ({fetch, locals}) => {
  const defaultParams = {
    sort: 'updated',
    per_page: '20',
  };
  const url = "https://api.github.com/user/repos";
  try {
    const response = await fetch(`${url}?${new URLSearchParams(defaultParams)}`);
    const data = (await response.json()) as UserReposApiResponse;
    return {
      topRepos: (mapUserReposToTopRepos(data))
    }
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {}
  }
}

