import type { OrganizationSimple } from '$lib/interfaces';
import type { GithubOrganizationSimple } from '$lib/interfaces/data-contract/github';

export const remapOrganizationSimple = (org: GithubOrganizationSimple): OrganizationSimple => ({
  avatarUrl: org.avatar_url,
  description: org.description,
  id: org.id,
  login: org.login,
  nodeId: org.node_id,
  url: org.url,
});
