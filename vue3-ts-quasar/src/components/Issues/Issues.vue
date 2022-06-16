<template>
  <div>
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
const { getIssues } = useIssues();
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
const { data: IssuesData, loading: IssuesLoading } = getIssues(username.value, reponame.value);
</script>
