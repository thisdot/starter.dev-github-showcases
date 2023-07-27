<script lang="ts" setup>
import { useProfileStore } from '~/store/profileStore';
const menu = ref(false);
const profileStore = useProfileStore();
</script>

<template>
	<v-menu v-model="menu" :close-on-content-click="false" location="end">
		<template #activator="{ props }">
			<div v-bind="props">
				<user-avatar />
			</div>
		</template>

		<v-card min-width="200">
			<v-list class="w-100 text-subtitle-1 font-weight-black">
				<v-list-item>
					{{ profileStore.login }}
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					color="primary"
					class="w-100"
					variant="text"
					@click="menu = false"
				>
					Log Out
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-menu>
</template>
