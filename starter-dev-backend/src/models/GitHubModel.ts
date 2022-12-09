import { GitHubAPI } from '../datasources/github-api';

export class GitHubModel {
  githubAPI: GitHubAPI;

  constructor() {
    this.githubAPI = new GitHubAPI();
  }

  async getRepo(owner: string, repoName: string) {
    return this.githubAPI.getRepo(owner, repoName);
  }
}
