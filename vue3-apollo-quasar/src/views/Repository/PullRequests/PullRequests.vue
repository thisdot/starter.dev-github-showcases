<template>
  <section class="q-mx-auto q-my-xl pullrequest-section">
    <pull-request-tab-view
      :openPullRequests="openPullRequests"
      :closedPullRequests="closedPullRequests"
    />
  </section>
</template>

<script lang="ts">
import { usePullRequest } from '@/composables';
import { defineComponent, defineProps, computed } from 'vue';

export default defineComponent({
  name: 'PullRequests',
});
</script>

<script lang="ts" setup>
import { PullRequestTabView } from '@/components';

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
const { getPullRequests } = usePullRequest();

const { data: pullRequestsData } = getPullRequests(props.owner, props.repo);

const openPullRequests = computed(
  () => pullRequestsData?.value.openPullRequest || null,
);
const closedPullRequests = computed(
  () => pullRequestsData.value.closedPullRequest || null,
);
</script>

<style lang="scss" scoped>
.pullrequest-section {
  max-width: 70rem;
}
</style>
