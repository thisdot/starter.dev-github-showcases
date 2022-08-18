<template>
  <div class="q-pr-lg q-pl-lg">
    <RepoPageLayout :username="route.params.username" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { RepoPageLayout } from '@/components';

const route = useRoute();
</script>
