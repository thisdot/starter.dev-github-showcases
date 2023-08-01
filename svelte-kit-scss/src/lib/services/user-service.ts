import { ENV } from '$lib/constants/env';
import { AbstractFetchService } from './abstract-fetch-service';

import type { GithubPublicProfileInformation } from '$lib/interfaces/data-contract/github';
import type { PublicProfileInformation } from '$lib/interfaces';

import { remapPublicProfileInformation } from '$lib/helpers';

export class UserService extends AbstractFetchService {
  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
  }

  /**
   * Get the authenticated user
   * @returns Profile Information
   */
  async getAuthenticatedUser(): Promise<PublicProfileInformation> {
    const url = new URL(`/user`, ENV.GITHUB_URL);
    const info = await this.rejectableFetchJson<GithubPublicProfileInformation>(url);
    return remapPublicProfileInformation(info);
  }

  /**
   * Get a user
   * @param username User login
   * @returns Profile Information
   */
  async getUserProfile(username: string): Promise<PublicProfileInformation> {
    const url = new URL(`/users/${username}`, ENV.GITHUB_URL);
    const info = await this.rejectableFetchJson<GithubPublicProfileInformation>(url);
    return remapPublicProfileInformation(info);
  }
}
