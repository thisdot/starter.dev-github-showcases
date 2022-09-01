<template>
  <section>
    <issue-tab-view :openIssues="openIssues" :closedIssues="closedIssues" />
  </section>
</template>

<script lang="ts">
import { useIssues } from '@/composables';
import { Issues } from '@/composables/github/types';
import { defineComponent, defineProps, watch, ref } from 'vue';

export default defineComponent({
  name: 'Issues',
});
</script>

<script lang="ts" setup>
import { IssueTabView } from '@/components';

const props = defineProps({
  owner: {
    type: String,
    default: '',
  },
  repo: {
    type: String,
    default: '',
  },
});
const openIssues = ref(null);
const closedIssues = ref(null);
const { getIssues } = useIssues();

const { data: issueData } = getIssues(props.owner, props.repo);

watch(issueData, (res: Issues) => {
  openIssues.value = res?.openIssues;
  closedIssues.value = res?.closedIssues;
});
</script>
