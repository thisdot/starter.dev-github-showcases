<template>
  <div class="q-pr-lg q-pl-lg">
    <ProfilePageLayout :username="username">
      <template #repositories="{ repo }">
        <RepoCard
          :owner="repo?.owner"
          :name="repo?.name"
          :visibility="repo?.visibility"
          :description="repo?.description"
          :primaryLanguage="repo?.primaryLanguage"
          :stargazerCount="repo?.stargazerCount"
          :forkCount="repo?.forkCount"
          :updatedAt="repo?.updatedAt"
          :isProfilePage="true"
        />
      </template>
    </ProfilePageLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Profile',
});
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ProfilePageLayout, RepoCard } from '@/components';

const route = useRoute();
const username = computed((): string => route.params.username as string);
</script>
