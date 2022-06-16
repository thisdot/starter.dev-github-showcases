<template>
  <Auth v-if="!user?.isLoggedIn" />
  <div v-else>
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
import { useUserStore } from '@/store/userStore';
import { Auth } from '@/views';

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
const user = useUserStore();

const { data: pullRequestsData, loading: pullRequestsLoading } = getPullRequests(username.value, reponame.value);

</script>