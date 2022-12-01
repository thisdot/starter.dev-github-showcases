// import DataLoader from 'dataloader';
import {
  RESTDataSource,
  WillSendRequestOptions,
} from '@apollo/datasource-rest';
import { KeyValueCache } from 'apollo-server-core';

export class GitHubAPI extends RESTDataSource {
  private token: string;

  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options);
    this.token = options.token;
    this.baseURL = 'https://api.github.com/';
  }

  override willSendRequest(request: WillSendRequestOptions) {
    request.headers['authorization'] = this.token;
  }

  // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#about-the-users-api
  async getOwner() {
    return await this.get('/user');
  }

  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
  async getRepo(owner: string, repoName: string) {
    return await this.get(`/repos/${owner}/${repoName}`);
  }

  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
  async getRepos(username: string) {
    return await this.get(`/users/${username}/repos`);
  }
}
