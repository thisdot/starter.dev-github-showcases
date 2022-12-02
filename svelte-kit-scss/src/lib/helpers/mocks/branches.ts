import type { GithubBranch } from '$lib/interfaces';

export const MOCK_BRANCH: GithubBranch = {
  name: 'mock_name',
  commit: {
    sha: 'mock_sha',
    url: 'mock_url',
  },
  protected: true,
  protection: {
    required_status_checks: {
      enforcement_level: 'mock_enforcement_level',
      contexts: [],
    },
  },
  protection_url: 'mock_protection_url',
};
