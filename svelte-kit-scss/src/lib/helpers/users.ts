import type {
  GithubProfilePlan,
  GithubPublicProfileInformation,
} from '$lib/interfaces/data-contract/github';
import type { ProfilePlan, PublicProfileInformation } from '$lib/interfaces';

export const remapProfilePlan = (plan: GithubProfilePlan): ProfilePlan => ({
  collaborators: plan.collaborators,
  name: plan.name,
  privateRepos: plan.private_repos,
  space: plan.space,
});

export const remapPublicProfileInformation = (
  info: GithubPublicProfileInformation
): PublicProfileInformation => ({
  avatarUrl: info.avatar_url,
  bio: info.bio,
  blog: info.blog,
  collaborators: info.collaborators,
  company: info.company,
  createdAt: info.created_at,
  diskUsage: info.disk_usage,
  email: info.email,
  followers: info.followers,
  following: info.following,
  gravatarId: info.gravatar_id,
  hireable: info.hireable,
  id: info.id,
  location: info.location,
  login: info.login,
  name: info.name,
  nodeId: info.node_id,
  ownedPrivateRepos: info.owned_private_repos,
  plan: info.plan ? remapProfilePlan(info.plan) : info.plan,
  privateGists: info.private_gists,
  publicGists: info.public_gists,
  publicRepos: info.public_repos,
  siteAdmin: info.site_admin,
  suspendedAt: info.suspended_at,
  totalPrivateRepos: info.total_private_repos,
  twitterUsername: info.twitter_username,
  type: info.type,
  updatedAt: info.updated_at,
  url: info.url,
});
