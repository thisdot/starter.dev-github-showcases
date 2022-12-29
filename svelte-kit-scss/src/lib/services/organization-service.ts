import { ENV } from '$lib/constants/env';
import { AbstractFetchService } from './abstract-fetch-service';

import {
  GITHUB_MAX_PER_PAGE_ORGANIZATION_MEMBERS,
  GITHUB_MAX_PER_PAGE_ORGANIZATION_MEMBERSHIP,
  type GithubOrganizationMembership,
  type GithubOrganizationSimple,
  type GithubSimpleUser,
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
    url.searchParams.append('per_page', String(GITHUB_MAX_PER_PAGE_ORGANIZATION_MEMBERSHIP));
    const items = await this.rejectableFetchJson<GithubOrganizationSimple[]>(url);
    return items.map(remapOrganizationSimple);
  }

  /**
   * List organization memberships for authenticated user
   * @returns Organizations Simple
   */
  async listOrganizationsForAuthenticatedUser(): Promise<OrganizationSimple[]> {
    const url = new URL(`/user/memberships/orgs`, ENV.GITHUB_URL);
    url.searchParams.append('per_page', String(GITHUB_MAX_PER_PAGE_ORGANIZATION_MEMBERSHIP));
    const memberships = await this.rejectableFetchJson<GithubOrganizationMembership[]>(url);
    return memberships.map((x) => x.organization).map(remapOrganizationSimple);
  }

  async listOrganizationMembers(
    organizationLogin: string,
    role?: 'all' | 'admin' | 'member'
  ): Promise<SimpleUser[]> {
    const url = new URL(`/orgs/${organizationLogin}/members`, ENV.GITHUB_URL);
    url.searchParams.append('per_page', String(GITHUB_MAX_PER_PAGE_ORGANIZATION_MEMBERS));
    if (role) {
      url.searchParams.append('role', role);
    }
    const items = await this.rejectableFetchJson<GithubSimpleUser[]>(url);
    return items.map(remapSimpleUser);
  }
}
