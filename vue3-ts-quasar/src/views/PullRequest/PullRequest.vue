<template>
  <div>
    <h1>Pull Request</h1>
    <PullRequests
      :username="route.params.username"
      :reponame="route.params.reponame"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PullRequests',
});
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { PullRequests } from '@/components';

const route = useRoute();
</script>
