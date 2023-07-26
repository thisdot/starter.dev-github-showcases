<script setup lang="ts">
import { useProfileStore } from '~/store/profileStore';
useHead({
	title: 'Nuxt 3, Pinia and Vuetify',
	meta: [
		{
			name: 'Nuxt 3, Pinia and Vuetify',
			content: 'Nuxt 3, Pinia and Vuetify',
		},
	],
});
definePageMeta({
	middleware: ['auth'],
});
const profileStore = useProfileStore();
await profileStore.getAuthUser();
await profileStore.getUserOrgs();
</script>

<template>
	<main class="w-50">
		<NavBar />
		<header class="bg-blue-darken-2 pa-4 text-center rounded mb-5">
			<h1 class="text-h5 font-weight-bold text-white">
				Nuxt 3, Pinia and Vuetify
			</h1>
		</header>
	</main>
</template>
