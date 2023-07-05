// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@pinia/nuxt'],
	pinia: {
		autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
	},
	css: ['vuetify/lib/styles/main.sass'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
	axios: {
		baseURL: process.env.GITHUB_API_URL,
	},
	runtimeConfig: {
		public: {
			GITHUB_API_URL: process.env.GITHUB_API_URL,
			STARTER_API_URL: process.env.STARTER_API_URL,
			baseUrl: process.env.BASE_URL || '/',
		},
	},
});
