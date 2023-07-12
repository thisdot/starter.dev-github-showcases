<template>
	<div>Redirecting...</div>
</template>

<script lang="ts" setup>
import { navigateTo, useCookie, useRuntimeConfig } from 'nuxt/app';

definePageMeta({
	middleware: ['auth']
})
const config = useRuntimeConfig();
const { STARTER_API_URL } = config;
onMounted(async () => {
	try {
		const resp: any = await $fetch(`${STARTER_API_URL}/auth/token`, {
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			credentials: 'include',
		});
		const accessToken: string = resp.access_token;
		const token = useCookie('token');
		token.value = accessToken;
		navigateTo('/')

	} catch (error) {
		navigateTo('/sign-in')
	}
});
</script>
