import type { GithubSimpleUser } from './common';

/** Github API schema: Organization Simple
 *
 * ***Note**: github-specific `*_url` properties excluded.*
 */
export type GithubOrganizationSimple = {
  avatar_url: string;
  description: string | null;
  id: number;
  login: string;
  node_id: string;
  url: string;
};

/** Github API schema: Org Membership > state
 *
 * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
 */
export enum GithubOrganizationMembershipState {
  Active = 'active',
  Pending = 'pending',
}

/** Github API schema: Org Membership > role
 *
 * The user's membership type in the organization.
 */
export enum GithubOrganizationMembershipType {
  Admin = 'admin',
  Member = 'member',
  BillingManager = 'billing_manager',
}

export type GithubOrganizationMembershipPermissions = {
  can_create_repository: boolean;
};

export type GithubOrganizationMembership = {
  organization_url: string;
  organization: GithubOrganizationSimple;
  permissions?: GithubOrganizationMembershipPermissions;
  role: GithubOrganizationMembershipType;
  state: GithubOrganizationMembershipState;
  url: string;
  user: GithubSimpleUser | null;
};

export const GITHUB_MAX_PER_PAGE_ORGANIZATION_MEMBERSHIP = 100;
export const GITHUB_MAX_PER_PAGE_ORGANIZATION_MEMBERS = 100;
