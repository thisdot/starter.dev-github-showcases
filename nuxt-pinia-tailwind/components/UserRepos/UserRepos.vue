<template>
  <div class="w-full border rounded-lg relative bg-white">
    <div class="flex items-center justify-between px-4 py-3">
      <h3 class="font-semibold">Repositories</h3>
    </div>

    <RepositoryCard
      v-for="repo in repos"
      :key="repo.id"
      :name="repo.name"
      :is-private="repo.private"
      :description="repo.description"
    />

    <div class="flex items-center justify-center py-4">
      <NuxtLink :to="'/' + username" class="text-blue-500 font-semibold"
        >View all repositories</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import { useAsync, useContext } from '@nuxtjs/composition-api';
import Vue from 'vue';
import RepositoryCard from '../RepositoryCard/RepositoryCard.vue';
import { useUserStore } from '~/store/userStore';

export default Vue.extend({
  name: 'UserRepos',
  components: { RepositoryCard },
  setup() {
    const userStore = useUserStore();
    const { $auth } = useContext();
    useAsync(async () => {
      await userStore.getUserRepos();
    });
    return {
      repos: userStore.repos,
      username: $auth.$state.user.login,
    };
  },
});
</script>
