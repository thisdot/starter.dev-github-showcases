<template>
  <div>
    <h1>Pull Request</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PullRequests',
});
</script>

<script lang="ts" setup>
import { usePullRequest } from '@/composables';

const { getPullRequests } = usePullRequest();

const { data: pullRequestsData, loading: pullRequestsLoading } = getPullRequests('thisdot', 'starter.dev');

console.log(pullRequestsData);

</script>