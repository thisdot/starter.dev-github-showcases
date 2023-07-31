<template>
  <OrganizationPageLayout :username="username">
    <template #repositories="{ repo }">
      <RepoCard
        :nameWithOwner="repo.nameWithOwner"
        :name="repo.name"
        :visibility="repo.visibility"
        :description="repo.description"
        :primaryLanguage="repo.primaryLanguage"
        :stargazerCount="repo.stargazerCount"
        :forkCount="repo.forkCount"
        :updatedAt="repo.updatedAt"
        :isProfilePage="true"
      />
    </template>
  </OrganizationPageLayout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'OrgsProfile',
});
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { OrganizationPageLayout, RepoCard } from '@/components';

const route = useRoute();
const username = computed((): string => route.params.org as string);
</script>
