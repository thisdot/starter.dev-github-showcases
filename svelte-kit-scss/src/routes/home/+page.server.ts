import type {PageServerLoad} from './$types';
import {mapUserReposToTopRepos} from "../../lib/helpers";
import {topRepositoriesFixture} from "../../lib/fixtures/repositories";
import type {UserReposApiResponse} from "../../lib/interfaces";

export const load: PageServerLoad = () => {
  const defaultParams = {
    sort: 'updated',
    per_page: '20',
  };
  // try {
  // const response = await fetch(`${url}?${new URLSearchParams(defaultParams)}`)
  // const data = (await response.json()) as UserReposApiResponse

  return {
    topRepos: (mapUserReposToTopRepos(topRepositoriesFixture as UserReposApiResponse))
  }


  // }
}

