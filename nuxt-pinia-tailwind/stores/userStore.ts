import { defineStore } from 'pinia'
import { AuthSuccessResponse } from '~/types/auth/interfaces'

export const useUserStore = defineStore('userStore ', {
  state: () => ({
    token: '',
  }),

  actions: {
    async getUserToken() {
      const {
        $axios,
        $config: { API_URL },
      } = this.$nuxt

      const url = `${API_URL}/auth/token`
      try {
        const { data } = await $axios.get<AuthSuccessResponse>(url, {
          withCredentials: true,
        })

        this.token = data.access_token

        // redirect('/');
      } catch (error) {
        return error
      }
    },
  },
})
