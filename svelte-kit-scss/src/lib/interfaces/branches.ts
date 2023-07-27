export type BranchCommit = {
  sha: string;
  url: string;
};

export type Branch = {
  name: string;
  commit?: BranchCommit;
  protected: true;
};
