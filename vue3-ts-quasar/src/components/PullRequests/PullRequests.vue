<template>
  <div>
    <h1>Pull Request</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, toRef } from 'vue';

export default defineComponent({
  name: 'PullRequests',
});
</script>

<script lang="ts" setup>
import { usePullRequest } from '@/composables';

const { getPullRequests } = usePullRequest();

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  reponame: {
    type: String,
    required: true,
  },
});

const username = toRef(props, 'username');
const reponame = toRef(props, 'reponame');

const { data: pullRequestsData, loading: pullRequestsLoading } = getPullRequests(username.value, reponame.value);

</script>