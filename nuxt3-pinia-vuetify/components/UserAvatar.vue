<script lang="ts" setup>
import { useProfileStore } from '~/store/profileStore';

const profileStore = useProfileStore();
const avatarUrl = computed(() => profileStore?.avatar_url);
const avatarPlaceholder = computed(() => profileStore?.login?.[0].toUpperCase());
const altText = computed(() => `${profileStore?.login} avatar`);

</script>

<template>
	<v-avatar color="info">
			<v-img
        v-if="avatarUrl" :src="avatarUrl" :alt="altText"
      ></v-img>
      <span v-else class="text-h5">{{ avatarPlaceholder }}</span>
    </v-avatar>
</template>
