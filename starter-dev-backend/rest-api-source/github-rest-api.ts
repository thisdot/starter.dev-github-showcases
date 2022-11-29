import axios, { AxiosInstance } from 'axios';

export class GitHubAPI {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://api.github.com/',
    });
  }

  //   https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
  async getRepo(owner: string, repoName: string) {
    const { data } = await this.axios.get(
      // `/repos/${owner}/${repoName}`
      `/repos/WillHutt/starwars-api`,
    );
    console.log(data);
    return data;
  }

  //     https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
  async getRepos(username: string) {
    const { data } = await this.axios.get(
      //   `/users/${username}/repos{?type,sort,direction,per_page,page}`,
      `/users/WillHutt/repos{?type,sort,direction,per_page,page}`,
    );
    console.log(data);
    return data;
  }
}
