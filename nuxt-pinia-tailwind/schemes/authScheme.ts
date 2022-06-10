import { LocalScheme } from '@nuxtjs/auth-next/dist/runtime'
import { HTTPRequest, HTTPResponse } from '@nuxtjs/auth-next'
import { IUser } from '~/types/auth/interfaces'

export default class CustomLoginScheme extends LocalScheme {
  //  Add any custom options

  // Override `fetchUser` method of `local` scheme
  async fetchUser(endpoint: HTTPRequest): Promise<void | HTTPResponse> {
    // Token is required but not available
    if (!this.check().valid) {
      return
    }

    // User endpoint is disabled.
    if (!this.options.endpoints.user) {
      this.$auth.setUser({})
      return
    }

    // Try to fetch user and then set
    try {
      const response = await this.$auth.requestWith(
        this.name,
        endpoint,
        this.options.endpoints.user
      )

      const user = response.data

      const newEndpoint: HTTPRequest = {
        ...endpoint,
        url: `users/${user.login}/orgs`,
      }

      const { data: userOrgs } = await this.$auth.requestWith(
        this.name,
        newEndpoint
      )

      const customUser: IUser = {
        ...user,
        orgs: userOrgs,
      }

      this.$auth.setUser(customUser)

      return response
    } catch (error: any) {
      this.$auth.callOnError(error, { method: 'fetchUser' })
    }
  }
}
