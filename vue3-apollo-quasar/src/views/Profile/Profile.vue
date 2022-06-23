<template>
  <div class="q-pr-lg q-pl-lg">
    <UserProfileCard :username="route.params.username" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { UserProfileCard } from '@/components';

const route = useRoute();
</script>
