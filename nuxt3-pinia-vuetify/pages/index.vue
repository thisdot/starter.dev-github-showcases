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
	<h4>Welcome, {{ profileStore.login }}</h4>
</template>
