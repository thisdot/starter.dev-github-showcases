import {
  RESTDataSource,
  WillSendRequestOptions,
} from '@apollo/datasource-rest';
// import { Repo } from 'src/types';
import { repoFormatter, orgFormatter, ownerFormatter } from 'src/formatters';

// const repoFormatter = (repo: Repo[] | Repo) => {
//   if (!repo) {
//     return null;
//   }

//   if (!Array.isArray(repo)) {
//     return {
//       description: repo?.description,
//       forkCount: repo?.forks_count,
//       fullName: repo?.full_name,
//       id: repo?.id,
//       isPrivate: repo?.private,
//       language: repo?.language,
//       name: repo?.name,
//       owner: repo?.owner,
//       stargazersCount: repo?.stargazers_count,
//       title: repo?.title,
//       updatedAt: repo?.updated_at,
//     };
//   }

//   return repo.map((repoItem: Repo | null) => ({
//     description: repoItem?.description,
//     forkCount: repoItem?.forks_count,
//     fullName: repoItem?.full_name,
//     id: repoItem?.id,
//     isPrivate: repoItem?.private,
//     language: repoItem?.language,
//     name: repoItem?.name,
//     owner: repoItem?.owner,
//     stargazersCount: repoItem?.stargazers_count,
//     title: repoItem?.title,
//     updatedAt: repoItem?.updated_at,
//   }));
// };
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
    // return orgFormatter(data);
    return data;
  }

  async getOwnerStarCount(login: string) {
    return await this.get(`/users/${login}/starred`);
  }

  // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#about-the-users-api
  async getOwner() {
    const data = await this.get('/user');
    // return ownerFormatter(data);
    return data;
  }

  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
  async getRepo(owner: string, repoName: string) {
    const data = await this.get(`/repos/${owner}/${repoName}`);
    // return repoFormatter(data);
    return data;
  }

  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
  async getRepos(username: string, perPage?: string) {
    const data = await this
      .get(`/users/${username}/repos?sort=updated&per_page=${perPage}
    `);
    return repoFormatter(data);
    // return data;
  }
}
