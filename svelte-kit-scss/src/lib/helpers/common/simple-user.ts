import type { SimpleUser } from '$lib/interfaces';
import type { GithubSimpleUser } from '$lib/interfaces/data-contract/github';

export const remapSimpleUser = (user: GithubSimpleUser): SimpleUser => ({
  avatarUrl: user.avatar_url,
  email: user.email,
  id: user.id,
  login: user.login,
  name: user.name,
  siteAdmin: user.site_admin,
  starredAt: user.starred_at,
  type: user.type,
  url: user.url,
});
