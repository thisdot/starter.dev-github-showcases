import {
  RESTDataSource,
  WillSendRequestOptions,
} from '@apollo/datasource-rest';

// TODO: follow up PR will cover formatters and testing
// import { repoFormatter, orgFormatter, ownerFormatter } from 'src/formatters';

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

  public async getOrgsMemberCount(login: string) {
    return await this.get(`/orgs/${login}/members?per_page=100}`);
  }

  public async getOrgRepos(login: string) {
    return await this.get(`/orgs/${login}`);
  }

  // https://docs.github.com/en/rest/orgs/orgs?apiVersion=2022-11-28#list-organizations-for-a-user
  public async getOrgs(login: string) {
    const data = await this.get(`/users/${login}/orgs`);
    // return orgFormatter(data);
    return data;
  }

  public async getOwnerStarCount(login: string) {
    return await this.get(`/users/${login}/starred`);
  }

  // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#about-the-users-api
  public async getOwner() {
    const data = await this.get('/user');
    // return ownerFormatter(data);
    return data;
  }

  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
  public async getRepo(owner: string, repoName: string) {
    const data = await this.get(`/repos/${owner}/${repoName}`);
    // return repoFormatter(data);
    return data;
  }

  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
  public async getRepos(username: string, perPage?: string) {
    const data = await this
      .get(`/users/${username}/repos?sort=updated&per_page=${perPage}
    `);
    // return repoFormatter(data);
    return data;
  }
}
