import { defineStore } from 'pinia'
import { IUserRepository } from '~/types/user/interfaces'

interface IUserRootState {
  topRepos: IUserRepository[]
}

export const useUserStore = defineStore('userStore ', {
  state: (): IUserRootState => ({
    topRepos: [],
  }),
  actions: {
    async getUserTopRepos() {
      const {
        $config: { GITHUB_API_URL },
        $axios,
      } = this.$nuxt
      const url = `${GITHUB_API_URL}/user/repos?sort=updated&affiliation=owner,collaborator,organization_member&per_page=20`

      const { data } = await $axios.get<IUserRepository[]>(url)

      this.topRepos = data
    },
  },
})
