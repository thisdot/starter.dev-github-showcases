import { defineStore } from 'pinia'
import { IRepository } from '@/types/repository/interfaces'
import { UserGist } from '@/types/user/interfaces'

interface IUserRootState {
  topRepos: IRepository[]
  gists: UserGist[]
  repos: IRepository[]
}

export const useUserStore = defineStore('userStore ', {
  state: (): IUserRootState => ({
    topRepos: [],
    gists: [],
    repos: [],
  }),
  actions: {
    async getUserTopRepos() {
      try {
        const {
          $config: { GITHUB_API_URL },
          $axios,
        } = this.$nuxt

        const url = `${GITHUB_API_URL}/user/repos`

        const { data } = await $axios.get<IRepository[]>(url, {
          params: {
            sort: 'updated',
            affiliation: 'owner, collaborator, organization_member',
            per_page: '20',
          },
        })

        this.topRepos = data
      } catch (error) {
        return error
      }
    },
    async getUserGists() {
      try {
        const {
          $config: { GITHUB_API_URL },
          $auth: { user },
          $axios,
        } = this.$nuxt

        const url = `${GITHUB_API_URL}/users/${user.login}/gists`

        const { data } = await $axios.get<UserGist[]>(url, {
          params: {
            per_page: '10',
          },
        })

        this.gists = data
      } catch (error) {
        return error
      }
    },
    async getUserRepos() {
      try {
        const {
          $config: { GITHUB_API_URL },
          $axios,
        } = this.$nuxt

        const url = `${GITHUB_API_URL}/user/repos`

        const { data } = await $axios.get<IRepository[]>(url, {
          params: {
            sort: 'updated',
            per_page: '10',
          },
        })

        this.repos = data
      } catch (error) {
        return error
      }
    },
  },
})
