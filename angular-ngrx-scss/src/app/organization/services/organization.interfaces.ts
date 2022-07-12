export interface OrganizationReposApiParams {
  type?:
    | 'all'
    | 'public'
    | 'private'
    | 'forks'
    | 'sources'
    | 'member'
    | 'internal';
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';
  direction?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
}

export interface OrganizationRepo {
  name: string;
  private: boolean;
  description: string;
  fork: boolean;
  language: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  archived: boolean;
  disabled: boolean;
  visibility: 'public' | 'private';
  updated_at: string;
}

export type OrganizationReposApiResponse = Array<OrganizationRepo>;
