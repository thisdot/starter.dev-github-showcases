export type GithubBranchCommit = {
  sha: string;
  url: string;
};

export type GithubBranch = {
  name: string;
  commit: GithubBranchCommit;
  protected: true;
};
