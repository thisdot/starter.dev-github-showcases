export enum ProfileType {
  Organization = 'Organization',
  User = 'User',
}

export type ProfilePlan = {
  collaborators: number;
  name: string;
  privateRepos: number;
  space: number;
};

export type PublicProfileInformation = {
  avatarUrl: string;
  bio: string | null;
  blog: string | null;
  collaborators?: number;
  company: string | null;
  createdAt: string;
  diskUsage: number;
  email: string | null;
  followers: number;
  following: number;
  gravatarId: string | null;
  hireable: boolean | null;
  id: number;
  location: string | null;
  login: string;
  name: string | null;
  nodeId: string;
  ownedPrivateRepos?: number;
  plan?: ProfilePlan;
  privateGists?: number;
  publicGists: number;
  publicRepos: number;
  siteAdmin: boolean;
  suspendedAt?: string | null;
  totalPrivateRepos?: number;
  twitterUsername?: string | null;
  type: string;
  updatedAt: string;
  url: string;
};
