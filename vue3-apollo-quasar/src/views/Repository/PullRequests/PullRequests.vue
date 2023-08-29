<template>
  {{ repoStore.loading }}
  <pull-request-wrapper :pullRequestsData="pullRequestsData" />
</template>

<script lang="ts">
import { usePullRequest } from '@/composables';
import { computed, defineComponent, defineProps, ref, watch } from 'vue';

export default defineComponent({
  name: 'PullRequests',
});
</script>

<script lang="ts" setup>
import { DEFAULT_PAGE_SIZE, parseSortParams, SORT_OPTIONS } from '@/helpers';
import { useRepoStore } from '@/store/respoStore';
import { PullRequestResp } from '@/composables/github/types';
import { useRoute } from 'vue-router';
import PullRequestWrapper from './PullRequestWrapper.vue';

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
const repoStore = useRepoStore();

const {
  query,
}: {
  query: {
    before?: string;
    after?: string;
  };
} = useRoute();
const pullRequestsData = ref<{ value: PullRequestResp }>();
const { getPullRequests, getPullRequestsRestAPI } = usePullRequest();
const resetData = {
  openPullRequest: {
    pullRequests: [],
    totalCount: 0,
    pageInfo: undefined,
  },
  closedPullRequest: {
    pullRequests: [],
    totalCount: 0,
    pageInfo: undefined,
  },
};

watch(
  [
    () => repoStore.selectedLabel,
    () => repoStore.selectedMilestone,
    () => repoStore.sortBy,
    () => props.owner,
    () => props.repo,
    () => query.before,
    () => query.after,
  ],
  async () => {
    repoStore.setLoading(ref(true));
    if (repoStore.selectedMilestone) {
      pullRequestsData.value = ref(resetData);
      const data = await getPullRequestsRestAPI({
        owner: props.owner,
        name: props.repo,
        orderBy: parseSortParams(SORT_OPTIONS, repoStore.sortBy, 0),
        direction: parseSortParams(SORT_OPTIONS, repoStore.sortBy, 1),
        labels: repoStore.selectedLabel ? [repoStore.selectedLabel] : undefined,
        milestone: repoStore.selectedMilestone,
        before: query.before,
        after: query.after,
        first: query.after || !query.before ? DEFAULT_PAGE_SIZE : undefined,
        last: query.before ? DEFAULT_PAGE_SIZE : undefined,
      });
      repoStore.setLoading(ref(false));
      const resp = computed(() => data);
      pullRequestsData.value = resp;
    } else {
      const { data: respData, loading } = getPullRequests({
        owner: props.owner,
        name: props.repo,
        orderBy: parseSortParams(SORT_OPTIONS, repoStore.sortBy, 0),
        direction: parseSortParams(SORT_OPTIONS, repoStore.sortBy, 1),
        labels: repoStore.selectedLabel ? [repoStore.selectedLabel] : undefined,
        milestone: repoStore.selectedMilestone,
        before: query.before,
        after: query.after,
        first: query.after || !query.before ? DEFAULT_PAGE_SIZE : undefined,
        last: query.before ? DEFAULT_PAGE_SIZE : undefined,
      });

      repoStore.setLoading(loading);
      pullRequestsData.value = respData;
    }
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.pullrequest-section {
  max-width: 70rem;
}
</style>
