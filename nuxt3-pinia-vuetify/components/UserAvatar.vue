<script setup>
import { useProfileStore } from '~/store/profileStore';

const profileStore = useProfileStore();
const avatarUrl = computed(() => profileStore.avatar_url);
const avatarPlaceholder = computed(() => profileStore.login[0]);
const altText = computed(() => `${profileStore.login} avatar`);

</script>

<template>
	<div class="d-flex justify-center align-center bg-gray-100">
		<img v-if="avatarUrl" :src="avatarUrl" :alt="altText" />
		<div v-else class="text-h4">{{ avatarPlaceholder }}</div>
	</div>
</template>
