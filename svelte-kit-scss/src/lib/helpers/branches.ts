import type { BranchOption } from '$lib/components/FileExplorer/models';
import type { Branch, BranchCommit } from '$lib/interfaces';
import type { GithubBranch, GithubBranchCommit } from '$lib/interfaces/data-contract/github';
import { composeDirHref } from './repository-contents';

export const remapBranchCommit = (commit: GithubBranchCommit): BranchCommit => ({
  url: commit.url,
  sha: commit.sha,
});

export const remapBranch = (branch: GithubBranch): Branch => ({
  name: branch.name,
  commit: remapBranchCommit(branch.commit),
  protected: branch.protected,
});

export const remapBranchOption = (
  branch: Branch,
  buildHref: (branchName: string) => string
): BranchOption => ({
  name: branch.name,
  href: buildHref(branch.name),
});

export const buildRepositoryFolderBranchOptions = (
  folderPath: string,
  username: string,
  repo: string,
  branches: Branch[],
  defaultBranch: string
): BranchOption[] => {
  const branchOptions = branches.map((branch) =>
    remapBranchOption(branch, (branchName: string) =>
      composeDirHref(folderPath, username, repo, branchName, defaultBranch)
    )
  );
  if (!branchOptions.find((x) => x.name === defaultBranch)) {
    const defaultBranchOption: BranchOption = {
      name: defaultBranch,
      href: composeDirHref(folderPath, username, repo, defaultBranch, defaultBranch),
    };
    branchOptions.push(defaultBranchOption);
  }
  return branchOptions;
};
