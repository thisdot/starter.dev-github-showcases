import type { BranchOption } from '$lib/components/FileExplorer/models';
import type { GithubBranch } from '$lib/interfaces';

export const remapBranchOption = (
  branch: GithubBranch,
  buildHref: (branchName: string) => string
): BranchOption => ({
  name: branch.name,
  href: buildHref(branch.name),
});
