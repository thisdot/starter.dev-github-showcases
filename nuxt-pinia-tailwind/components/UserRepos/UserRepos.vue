<template>
  <div class="w-full border rounded-lg relative bg-white">
    <RepositoryCard
      v-for="repo in repos"
      :key="repo.id"
      :name="repo.name"
      :is-private="repo.private"
      :meta="{
        language: repo.language,
        updatedAt: repo.updated_at,
        forkCount: repo.forks_count,
        stargazerCount: repo.stargazers_count,
      }"
    />

    <div class="flex items-center justify-center py-4">
      <NuxtLink :to="'/' + username" class="text-blue-500 font-semibold"
        >View all repositories</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api';
import RepositoryCard from '~/components/RepositoryCard/RepositoryCard.vue';
import { useUserStore } from '~/store/userStore';

export default defineComponent({
  name: 'UserRepos',
  components: { RepositoryCard },
  setup() {
    const userStore = useUserStore();
    const { $auth } = useContext();
    const repos = useAsync(async () => {
      await userStore.getUserRepos();

      return userStore.repos;
    });

    return {
      repos,
      username: $auth.$state.user.login,
    };
  },
});
</script>
