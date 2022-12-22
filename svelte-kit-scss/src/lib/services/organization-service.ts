import { ENV } from '$lib/constants/env';
import { AbstractFetchService } from './abstract-fetch-service';

import type {
  GithubOrganizationSimple,
  GithubSimpleUser,
} from '$lib/interfaces/data-contract/github';
import type { OrganizationSimple, SimpleUser } from '$lib/interfaces';

import { remapOrganizationSimple, remapSimpleUser } from '$lib/helpers';

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

  async listOrganizationMembers(
    organizationLogin: string,
    role?: 'all' | 'admin' | 'member'
  ): Promise<SimpleUser[]> {
    const url = new URL(`/orgs/${organizationLogin}/members`, ENV.GITHUB_URL);
    url.searchParams.append('per_page', '100');
    if (role) {
      url.searchParams.append('role', role);
    }
    const items = await this.rejectableFetchJson<GithubSimpleUser[]>(url);
    return items.map(remapSimpleUser);
  }
}
