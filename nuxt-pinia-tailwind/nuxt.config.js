import { LoginStrategies } from './types/auth/enums'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Github Demo App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/icons', extensions: ['vue'], pathPrefix: false },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    // https://pinia.vuejs.org/ssr/nuxt.html#installation
    ['@pinia/nuxt', { disableVuex: false }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.GITHUB_API_URL,
  },

  publicRuntimeConfig: {
    GITHUB_API_URL: process.env.GITHUB_API_URL,
    STARTER_API_URL: process.env.STARTER_API_URL,
    BASE_URL: process.env.BASE_URL,
  },

  privateRuntimeConfig: {},

  // Storybook module configuration: https://storybook.nuxtjs.org/api/options
  storybook: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  devServerHandlers: [],

  router: {
    middleware: 'auth',
  },

  auth: {
    redirect: {
      login: '/sign-in',
      home: '/',
      logout: '/sign-in',
    },
    strategies: {
      [LoginStrategies.CustomLogin]: {
        scheme: './schemes/authScheme',
        user: {
          property: false,
        },
        token: {
          property: 'access_token',
        },
        endpoints: {
          login: {
            baseURL: process.env.STARTER_API_URL,
            url: '/auth/token',
            method: 'get',
            withCredentials: true,
            propertyName: 'access_token',
          },
          user: {
            baseURL: process.env.GITHUB_API_URL,
            url: '/user',
            method: 'get',
            propertyName: false,
          },
          logout: {
            baseURL: process.env.STARTER_API_URL,
            url: '/auth/signout',
            method: 'post',
          },
        },
      },
    },
  },
}
