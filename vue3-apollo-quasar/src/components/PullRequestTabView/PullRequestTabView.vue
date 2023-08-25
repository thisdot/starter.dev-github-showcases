<template>
  <div class="wrapper">
    <div
      v-if="isFiltered"
      class="row items-center text-caption q-my-sm q-ml-2 cursor-pointer clear_wrapper"
      @click="resetFilter"
    >
      <span class="q-mr-sm close_icon row just0fy-center items-center">
        <q-icon name="close" size="xs" />
      </span>
      Clear filter
    </div>
    <div class="tab_view">
      <IssuePullRequestTab
        @changeTab="changeTab"
        :openCounts="openPullRequests?.totalCount"
        :closedCounts="closedPullRequests?.totalCount"
        :tabType="card_type"
      />
      <q-list class="open-pr" separator v-if="tabRef === TABS.OPEN">
        <IssuesPullRequestsCard
          v-for="(data, index) in openPullRequestsData"
          :key="index"
          :state="toLowerCase(data.state)"
          :cardType="card_type"
          :author="data.login"
          :title="data.title"
          :url="data.url"
          :commentCount="data.commentCount"
          :number="data.number"
          :createdAt="data.createdAt"
        >
        </IssuesPullRequestsCard>

        <div
          v-if="openPullRequestsData.length === 0 && !isLoading"
          class="row justify-center items-center q-pa-md text-subtitle1 text-weight-medium text-uppercase"
        >
          No Content found
        </div>
      </q-list>

      <q-list class="closed-pr" separator v-else>
        <IssuesPullRequestsCard
          v-for="(data, index) in closedPullRequestsData"
          :key="index"
          :state="toLowerCase(data.state)"
          :cardType="card_type"
          :author="data.login"
          :title="data.title"
          :url="data.url"
          :commentCount="data.commentCount"
          :number="data.number"
          :createdAt="data.createdAt"
        >
        </IssuesPullRequestsCard>
        <div
          v-if="closedPullRequestsData.length === 0 && !isLoading"
          class="row justify-center items-center q-pa-md text-subtitle1 text-weight-medium text-uppercase"
        >
          No Content found
        </div>
      </q-list>
      <div v-if="isLoading" class="row justify-center items-center q-pa-md">
        <q-spinner-ios color="primary" size="2em" />
      </div>
    </div>
    <PaginationButtons v-if="showPagination(tabRef)" @paginate="paginate" />
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, computed } from 'vue';
import { IPullRequestsParse } from '@/helpers/parsePullRequest';

export default defineComponent({
  name: 'PullRequestTabView',
});
</script>
<script lang="ts" setup>
import {
  IssuePullRequestTab,
  IssuesPullRequestsCard,
  PaginationButtons,
} from '@/components';
import { TABS } from './data';
import { useRepoStore } from '@/store/respoStore';

const props = defineProps({
  openPullRequests: {
    type: Object as () => IPullRequestsParse,
    default: () => null,
  },
  closedPullRequests: {
    type: Object as () => IPullRequestsParse,
    default: () => null,
  },
});

const repoStore = useRepoStore();

const tabRef = ref(TABS.OPEN);
const card_type = 'pullrequest';

const resetFilter = () => repoStore.resetFilter();
const isFiltered = computed(
  () =>
    repoStore.selectedLabel || repoStore.selectedMilestone || repoStore.sortBy,
);
const isLoading = computed(() => repoStore.loading);

const openPullRequestsData = computed(() => {
  return props.openPullRequests.pullRequests || [];
});
const closedPullRequestsData = computed(() => {
  return props.closedPullRequests.pullRequests || [];
});

const changeTab = (tab: string) => {
  tabRef.value = tab;
};
const paginate = (value) => null;

const toLowerCase = (value: string) => value.toLowerCase();
const showPagination = (tab) => {
  const pull_requests = {
    openPullRequest: openPullRequestsData.value,
    closedPullRequest: closedPullRequestsData.value,
  };
  return tab === tabRef.value && pull_requests[`${tab}PullRequest`].length > 6;
};
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.tab_view {
  border-radius: 6px;
  border: 1px solid $secondary-100;
  min-height: 10rem;
}
.clear_wrapper {
  &:hover {
    .close_icon {
      background-color: rgb(46, 94, 190);
    }
  }
}
.close_icon {
  background-color: rgb(107 114 128);
  color: white;
  border-radius: 0.375rem;
}
</style>
