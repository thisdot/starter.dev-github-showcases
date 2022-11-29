import axios, { AxiosInstance } from 'axios';

export class GitHubAPI {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://api.github.com/graphql',
    });
  }

  async getRepos(username: string) {
    const { data } = await this.axios.get(
      `/users/${username}/repos{?type,sort,direction,per_page,page`,
    );
    return data;
  }
}
