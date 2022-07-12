<template>
  <div class="q-pr-lg q-pl-lg">
    <ProfilePageLayout :username="route.params.username" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ProfilePageLayout } from '@/components';

const route = useRoute();
</script>
