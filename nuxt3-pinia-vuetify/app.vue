<script lang="ts" setup>
const token = useCookie('token');
</script>

<template>
	<div
		class="v-theme--customTheme d-flex flex-column justify-center align-center"
	>
		<nav-bar v-if="token" />
		<NuxtPage />
	</div>
</template>
