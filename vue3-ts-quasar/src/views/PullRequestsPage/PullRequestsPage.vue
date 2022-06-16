<template>
  <div>
    <PullRequests
      :username="route.params.username"
      :reponame="route.params.reponame"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PullRequestsPage',
});
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { PullRequests } from '@/components';

const route = useRoute();
</script>
