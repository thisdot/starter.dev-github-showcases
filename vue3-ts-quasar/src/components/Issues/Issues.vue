<template>
  <Auth v-if="!user?.isLoggedIn" />
  <div v-else>
    <h1>Issues</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, toRef } from 'vue';
export default defineComponent({
  name: 'Issues',
});
</script>

<script lang="ts" setup>
import { useIssues } from '@/composables';
import { useUserStore } from '@/store/userStore';
import { Auth } from '@/views';

const { getIssues } = useIssues();
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  issuename: {
    type: String,
    required: true,
  },
});
const username = toRef(props, 'username');
const issuename = toRef(props, 'issuename');
const user = useUserStore();

const { data: IssuesData, loading: IssuesLoading } = getIssues(username.value, issuename.value);
</script>
