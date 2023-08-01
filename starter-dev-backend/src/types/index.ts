export type Repo = {
  description: string;
  forks_count: number;
  full_name: string;
  id: string;
  language: string;
  name: string;
  owner: string;
  private: boolean;
  stargazers_count: number;
  title: string;
  updated_at: string;
};

export type Owner = {
  bio: string;
  company: string;
  email: string;
  followers: string;
  following: string;
  location: string;
  login: string;
  name: string;
  orgs: [Org];
  starred_url: string;
  twitter_username: string;
};

export type Org = {
  avatar_url: string;
  login: string;
  name: string;
  members_url: string;
  repos_url: string;
};
