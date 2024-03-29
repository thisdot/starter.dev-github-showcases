import {
  RESTDataSource,
  WillSendRequestOptions,
} from '@apollo/datasource-rest';

// TODO: follow up PR will cover testing
// https://github.com/thisdot/starter.dev-github-showcases/issues/1040
import { repoFormatter, orgFormatter, ownerFormatter } from '../formatters';

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

  async getOrgsMemberCount(login: string) {
    return await this.get(`/orgs/${login}/members?per_page=100}`);
  }

  async getOrgRepos(login: string) {
    return await this.get(`/orgs/${login}`);
  }

  // https://docs.github.com/en/rest/orgs/orgs?apiVersion=2022-11-28#list-organizations-for-a-user
  async getOrgs(login: string) {
    const data = await this.get(`/users/${login}/orgs`);
    return orgFormatter(data);
  }

  async getOwnerStarCount(login: string) {
    return await this.get(`/users/${login}/starred`);
  }

  // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#about-the-users-api
  async getOwner() {
    const data = await this.get('/user');
    return ownerFormatter(data);
  }

  // https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-a-repository-readme
  async getReadMe(owner: string, repoName: string) {
    try {
      const data = await this.get(`/repos/${owner}/${repoName}/readme`);
      return data;
    } catch (error) {
      return null;
    }
  }

  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
  async getRepo(owner: string, repoName: string) {
    const data = await this.get(`/repos/${owner}/${repoName}`);
    return repoFormatter(data);
  }

  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
  async getRepos(username: string, perPage?: string) {
    const data = await this
      .get(`/users/${username}/repos?sort=updated&per_page=${perPage}
    `);
    return repoFormatter(data);
  }

  // https://docs.github.com/rest/reference/git#get-a-tree
  async getTree(owner: string, repoName: string) {
    return await this.get(
      `/repos/${owner}/${repoName}/git/trees/HEAD?recursive=1`,
    );
  }
}
