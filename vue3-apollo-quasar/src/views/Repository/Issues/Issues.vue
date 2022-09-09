<template>
  <section class="q-mx-auto q-my-xl issues-section">
    <issue-tab-view :openIssues="openIssues" :closedIssues="closedIssues" />
  </section>
</template>

<script lang="ts">
import { useIssue } from '@/composables';
import { defineComponent, defineProps, computed } from 'vue';

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
const { getIssues } = useIssue();

const { data: issueData } = getIssues(props.owner, props.repo);

const openIssues = computed(() => issueData?.value.openIssues || null);
const closedIssues = computed(() => issueData.value.closedIssues || null);
</script>

<style lang="scss" scoped>
.issues-section {
  max-width: 70rem;
}
</style>
