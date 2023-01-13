import type { GithubBranch } from '$lib/interfaces';

export const MOCK_BRANCH: GithubBranch = {
  name: 'mock_name',
  commit: {
    sha: 'mock_sha',
    url: 'mock_url',
  },
  protected: true,
};
