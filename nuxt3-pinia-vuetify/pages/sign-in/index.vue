<template>
	<section
		class="h-screen w-100 d-flex flex-row align-center justify-center bg-black"
	>
		<v-btn
		type="submit"
		density="comfortable"
		size="large"
		class="text-zinc-100 px-20 py-2 rounded-md"
		data-testid="sign-in-button"
		@click="handleSignIn"
		>
			Sign in with GitHub
		</v-btn>
	</section>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from 'nuxt/app';

import { SIGN_IN_URL } from '@/constants/urlConstants';

definePageMeta({
	middleware: ['auth']
})

const config = useRuntimeConfig();
const { STARTER_API_URL, baseUrl } = config;

const handleSignIn = (event: Event): void => {
	event.preventDefault();
	window.location.href = SIGN_IN_URL(STARTER_API_URL, baseUrl);
};
</script>
