import type { BranchOption } from '$lib/components/FileExplorer/models';
import type { GithubBranch } from '$lib/interfaces';

export const remapBranchOption = (branch: GithubBranch): BranchOption => ({
  name: branch.name,
});
