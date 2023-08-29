<template>
  <section class="q-mx-auto q-my-xl pullrequest-section">
    <pull-request-tab-view
      :openPullRequests="openPullRequests"
      :closedPullRequests="closedPullRequests"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, defineProps, computed, watch, PropType } from 'vue';

export default defineComponent({
  name: 'PullRequestsWrapper',
});
</script>

<script lang="ts" setup>
import { PullRequestTabView } from '@/components';
import { PullRequestResp } from '@/composables/github/types';
import { useRepoStore } from '@/store/respoStore';

const props = defineProps({
  pullRequestsData: {
    type: Object as PropType<{ value: PullRequestResp }>,
    default: () => ({}),
  },
});
const repoStore = useRepoStore();

watch([() => props.pullRequestsData.value], () => {
  repoStore.setLabels(
    repoStore.labels.length
      ? repoStore.labels
      : props.pullRequestsData?.value?.labels,
  );
  repoStore.setMilestones(
    repoStore.milestones.length
      ? repoStore.milestones
      : props.pullRequestsData?.value?.milestones,
  );
});

const openPullRequests = computed(
  () => props.pullRequestsData.value?.openPullRequest || null,
);
const closedPullRequests = computed(
  () => props.pullRequestsData.value?.closedPullRequest || null,
);
</script>

<style lang="scss" scoped>
.pullrequest-section {
  max-width: 70rem;
}
</style>
