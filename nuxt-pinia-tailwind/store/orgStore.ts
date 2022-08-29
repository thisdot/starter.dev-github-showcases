import { defineStore } from 'pinia';
import { IRepository } from '@/types/repository/interfaces';

interface IOrgRootState {
  repos: IRepository[];
}

export const useOrgStore = defineStore('orgStore ', {
  state: (): IOrgRootState => ({
    repos: [],
  }),
  actions: {
    async getUserTopRepos(org: string) {
      try {
        const {
          $config: { GITHUB_API_URL },
          $axios,
        } = this.$nuxt;

        const url = `${GITHUB_API_URL}/orgs/${org}/repos`;

        const { data } = await $axios.get<IRepository[]>(url, {
          params: {
            sort: 'updated',
            per_page: '10',
          },
        });

        this.repos = data;
      } catch (error: any) {
        if (error && error?.response) {
          throw error;
        }

        throw new Error('Error fetching org repos');
      }
    },
  },
});
