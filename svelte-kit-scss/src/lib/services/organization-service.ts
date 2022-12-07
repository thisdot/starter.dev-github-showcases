import { ENV } from '$lib/constants/env';
import { AbstractFetchService } from './abstract-fetch-service';

import type { GithubOrganizationSimple } from '$lib/interfaces/data-contract/github';
import type { OrganizationSimple } from '$lib/interfaces';

import { remapOrganizationSimple } from '$lib/helpers';

export class OrganizationService extends AbstractFetchService {
  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
  }

  /**
   * List public organization memberships for the specified user
   * @param username - Username (login)
   * @returns Organizations Simple
   */
  async listOrganizationsForUser(username: string): Promise<OrganizationSimple[]> {
    const url = new URL(`/users/${username}/orgs`, ENV.GITHUB_URL);
    const items = await this.rejectableFetchJson<GithubOrganizationSimple[]>(url);
    return items.map(remapOrganizationSimple);
  }
}
