<template>
  <div>
    <h1>Pull Request</h1>
    <PullRequests />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PullRequests',
});
</script>

<script lang="ts" setup>
import { PullRequests } from '@/components';
</script>
