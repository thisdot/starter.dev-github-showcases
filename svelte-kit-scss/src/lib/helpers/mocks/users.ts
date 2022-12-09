import type {
  GithubProfilePlan,
  GithubPublicProfileInformation,
} from '$lib/interfaces/data-contract/github';

export const MOCK_PROFILE_PLAN: GithubProfilePlan = {
  name: 'Medium',
  space: 400,
  private_repos: 20,
  collaborators: 0,
};

export const MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION: GithubPublicProfileInformation = {
  login: 'octocat',
  id: 1,
  node_id: 'MDQ6VXNlcjE=',
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  type: 'User',
  site_admin: false,
  name: 'monalisa octocat',
  company: 'GitHub',
  blog: 'https://github.com/blog',
  location: 'San Francisco',
  email: 'octocat@github.com',
  hireable: false,
  bio: 'There once was...',
  twitter_username: 'monatheoctocat',
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  created_at: '2008-01-14T04:33:35Z',
  updated_at: '2008-01-14T04:33:35Z',
  private_gists: 81,
  total_private_repos: 100,
  owned_private_repos: 100,
  disk_usage: 10000,
  collaborators: 8,
  plan: MOCK_PROFILE_PLAN,
};
