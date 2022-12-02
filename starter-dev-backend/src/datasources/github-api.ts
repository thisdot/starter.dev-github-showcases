import {
  RESTDataSource,
  WillSendRequestOptions,
} from '@apollo/datasource-rest';

export class GitHubAPI extends RESTDataSource {
  context: any;

  constructor() {
    super();
    this.baseURL = 'https://api.github.com/';
  }

  initialize({ context }) {
    this.context = context;
  }

  override willSendRequest(request: WillSendRequestOptions) {
    request.headers['authorization'] = this.context.token;
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
  async getRepos(username: string, perPage?: string) {
    // if ()
    return await this
      .get(`/users/${username}/repos?sort=updated&per_page=${perPage}
    `);
  }
}
