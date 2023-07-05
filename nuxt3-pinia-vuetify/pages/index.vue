<script setup lang="ts">
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
	middleware: ['auth']
})
</script>

<template>
	<main class="w-50">
		<header class="bg-blue-darken-2 pa-4 text-center rounded mb-5">
			<h1 class="text-h5 font-weight-bold text-white">
				Nuxt 3, Pinia and Vuetify
			</h1>
		</header>
	</main>
</template>
