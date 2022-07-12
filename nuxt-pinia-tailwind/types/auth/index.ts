import { Auth as NuxtAuth } from '@nuxtjs/auth-next'
import { IUser } from '../user/interfaces'

/**
 * Nuxt/auth doesn't have a proper way to type our user yet
 * hence we do this approach:
 */
declare module 'vue/types/vue' {
  interface Auth extends NuxtAuth {
    user: IUser & typeof NuxtAuth.prototype.user
  }
}

declare module '@nuxt/types' {
  interface Auth extends NuxtAuth {
    user: IUser & typeof NuxtAuth.prototype.user
  }
}

declare module 'vuex/types/index' {
  interface Auth extends NuxtAuth {
    user: IUser & typeof NuxtAuth.prototype.user
  }
}
