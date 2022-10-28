import type {PageServerLoad} from './$types';
import type {UserApiResponse, UserOrgsApiResponse} from "../../lib/interfaces";
import {mapUserInfoResponseToUserInfo, mapUserOrgsApiResponseToUserOrgs} from "../../lib/helpers/user";

type svelteFetch = (input: RequestInfo, init?: (RequestInit | undefined)) => Promise<Response>

export const load: PageServerLoad = async ({params, fetch, locals}) => {
  const [userInfo, userOrgs] = await Promise.all([
    getUserInfo(params.username, fetch, locals.accessToken),
    getUserOrgs(fetch, locals.accessToken)
  ])

  return {
    userInfo: mapUserInfoResponseToUserInfo(userInfo),
    userOrgs: mapUserOrgsApiResponseToUserOrgs(userOrgs)
  }
}

const getUserInfo = async (username: string, fetch: svelteFetch, accessToken: string | undefined): Promise<UserApiResponse> => {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}`
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return response.json() as Promise<UserApiResponse>;
}

const getUserOrgs = async (fetch: svelteFetch, accessToken: string | undefined): Promise<UserOrgsApiResponse> => {
  const url = `https://api.github.com/user/orgs`
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return response.json() as Promise<UserOrgsApiResponse>;
}
