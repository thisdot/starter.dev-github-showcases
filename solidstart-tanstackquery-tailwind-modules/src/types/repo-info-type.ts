export type Topics = {
  topic: {
    name: string
  }
}

export interface RepoInfo {
  defaultBranchRef: {
    name: string
  },
  isPrivate: boolean,
  stargazerCount: number,
  forkCount: number, 
  description: string,
  homepageUrl: string, 
  watchers: {
    totalCount: number,
  },
  issues: {
    totalCount: number, 
  }
  pullRequests: {
    totalCount: number, 
  }
  topics: {
    nodes: Topics[]
  },
  owner: {
    orgName: string, 
    orgAvatarUrl: string
  }
}