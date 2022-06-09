export interface IUserRepository {
  id: number
  name: string
  full_name: string
  owner: { login: string }
  description: string
  private: boolean
  html_url: string
  url: string
  updated_at: Date
  stargazers_count: number
  language: string
  branches_url: string
  visibility: 'public' | 'private'
  subscribers_count: number
  forks_count: number
  open_issues_count: number
  pulls: number
  default_branch: string
  homepage: string
}
