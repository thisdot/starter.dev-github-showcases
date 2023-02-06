export interface RepoTree {
  branches: {
    nodes: {
      name: string
    }[]
  },
  tree: {
    entries: {
      name: string, 
      type: string, 
      path: string
    }
  }
}