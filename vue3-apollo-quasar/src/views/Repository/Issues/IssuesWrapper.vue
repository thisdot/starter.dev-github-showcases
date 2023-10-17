<template>
  <section class="q-mx-auto q-my-xl issues-section">
    <issue-tab-view :openIssues="openIssues" :closedIssues="closedIssues" />
  </section>
</template>

<script lang="ts">
import { defineComponent, defineProps, computed, watch, PropType } from 'vue';

export default defineComponent({
  name: 'IssuesWrapper',
});
</script>

<script lang="ts" setup>
import { IssueTabView } from '@/components';
import { useRepoStore } from '@/store/respoStore';
import { IssueResp } from '@/composables/github/types';

const props = defineProps({
  issueData: {
    type: Object as PropType<{ value: IssueResp }>,
    default: () => ({}),
  },
});

const repoStore = useRepoStore();

watch([() => props.issueData.value], () => {
  repoStore.setLabels(props.issueData?.value?.labels || repoStore.labels);
  repoStore.setMilestones(
    props.issueData?.value?.milestones || repoStore.milestones,
  );
});

const openIssues = computed(() => {
  return props.issueData?.value?.openIssues || null;
});
const closedIssues = computed(
  () => props.issueData?.value?.closedIssues || null,
);
</script>

<style lang="scss" scoped>
.issues-section {
  max-width: 70rem;
}
</style>
