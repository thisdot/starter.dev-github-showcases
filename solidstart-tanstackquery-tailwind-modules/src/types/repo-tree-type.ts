export interface RepoTree {
  branches: {
    nodes: {
      name: string;
    }[];
  };
  tree: {
    entries: TreeProps[];
  };
}

export interface TreeProps {
  name: string;
  type: string;
  path: string;
}
