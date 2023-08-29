<template>
  <IssuesWrapper :issueData="issueData" />
</template>

<script lang="ts">
import { useIssue } from '@/composables';
import { defineComponent, defineProps, watch, ref } from 'vue';
import { IssueResp } from '@/composables/github/types';

export default defineComponent({
  name: 'Issues',
});
</script>

<script lang="ts" setup>
import IssuesWrapper from './IssuesWrapper.vue';
import { DEFAULT_PAGE_SIZE, parseSortParams, SORT_OPTIONS } from '@/helpers';
import { useRepoStore } from '@/store/respoStore';
import { useRoute } from 'vue-router';

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
const issueData = ref<{ value: IssueResp }>();
const { getIssues } = useIssue();

watch(
  [
    () => repoStore.selectedLabel,
    () => repoStore.milestoneNumber,
    () => repoStore.sortBy,
    () => props.owner,
    () => props.repo,
    () => query.before,
    () => query.after,
  ],
  () => {
    repoStore.setLoading(ref(true));
    const { data: issueDatax, loading } = getIssues({
      owner: props.owner,
      name: props.repo,
      orderBy: parseSortParams(SORT_OPTIONS, repoStore.sortBy, 0),
      direction: parseSortParams(SORT_OPTIONS, repoStore.sortBy, 1),
      filterBy: {
        labels: repoStore.selectedLabel ? [repoStore.selectedLabel] : undefined,
        milestoneNumber: repoStore.milestoneNumber,
      },
      before: query.before,
      after: query.after,
      first: query.after || !query.before ? DEFAULT_PAGE_SIZE : undefined,
      last: query.before ? DEFAULT_PAGE_SIZE : undefined,
    });
    repoStore.setLoading(loading);
    issueData.value = issueDatax;
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.issues-section {
  max-width: 70rem;
}
</style>
