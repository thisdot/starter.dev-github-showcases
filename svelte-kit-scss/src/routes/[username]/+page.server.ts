import type {PageServerLoad} from './$types';
import type {UserApiResponse} from "../../lib/interfaces";
import {mapUserInfoResponseToUserInfo, mapUserOrgsApiResponseToUserOrgs} from "../../lib/helpers/user";
import type {UserOrgsApiResponse} from "../../lib/interfaces";

const headers = {
  Authorization: `Bearer `
}

export const load: PageServerLoad = async ({params}) => {
  const [userInfo, userOrgs] = await Promise.all([
    await getUserInfo(params.username),
    await getUserOrgs()
  ])

  return {
    userInfo: mapUserInfoResponseToUserInfo(userInfo),
    userOrgs: mapUserOrgsApiResponseToUserOrgs(userOrgs)
  }
}

const getUserInfo = async (username: string): Promise<UserApiResponse> => {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}`
  const response = await fetch(url, {
    headers
  })
  return (await response.json()) as UserApiResponse
}

const getUserOrgs = async (): Promise<UserOrgsApiResponse> => {
  const url = `https://api.github.com/user/orgs`
  const response = await fetch(url, {
    headers
  })
  return (await response.json()) as UserOrgsApiResponse
}
