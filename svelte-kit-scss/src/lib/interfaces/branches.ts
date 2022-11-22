export interface GithubBranch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: true;
  protection: {
    required_status_checks: {
      enforcement_level: string;
      contexts: string[];
    };
  };
  protection_url: string;
}
