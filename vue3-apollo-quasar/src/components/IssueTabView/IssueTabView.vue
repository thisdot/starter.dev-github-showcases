<template>
  <div class="wrapper">
    <ClearIssuePRFilter />
    <div class="tab_view">
      <IssuePullRequestTab
        @changeTab="changeTab"
        :openCounts="openIssues?.totalCount"
        :closedCounts="closedIssues?.totalCount"
        :tabType="card_type"
      />
      <q-list class="open-issue" separator v-if="tabRef === TABS.OPEN">
        <IssuesPullRequestsCard
          v-for="(data, index) in openIssuesList"
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
          v-if="openIssuesList.length === 0 && !repoStore.loading"
          class="row justify-center items-center q-pa-md text-subtitle1 text-weight-medium text-uppercase"
        >
          No Content found
        </div>
      </q-list>

      <q-list class="closed-issue" separator v-else>
        <IssuesPullRequestsCard
          v-for="(data, index) in closedIssuesList"
          :key="index"
          :state="toLowerCase(data.state)"
          :cardType="card_type"
          :author="data.login"
          :title="data.title"
          :url="data.url"
          :commentCount="data.commentCount"
          :number="data.number"
          :createdAt="data.createdAt"
          :closedAt="data.closedAt"
        >
        </IssuesPullRequestsCard>
        <div
          v-if="closedIssuesList.length === 0 && !repoStore.loading"
          class="row justify-center items-center q-pa-md text-subtitle1 text-weight-medium text-uppercase"
        >
          No Content found
        </div>
      </q-list>
      <div
        v-if="repoStore.loading"
        class="row justify-center items-center q-pa-md"
      >
        <q-spinner-ios color="primary" size="2em" />
      </div>
    </div>
    <PaginationButtons v-if="showPagination(tabRef)" @paginate="paginate" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, computed } from 'vue';
import { IIssueParse } from '@/helpers/parseIssue';
import { useRepoStore } from '@/store/respoStore';

export default defineComponent({
  name: 'IssueTabView',
});
</script>
<script lang="ts" setup>
import {
  IssuePullRequestTab,
  IssuesPullRequestsCard,
  PaginationButtons,
  ClearIssuePRFilter,
} from '@/components';
import { TABS } from './data';

const props = defineProps({
  openIssues: {
    type: Object as () => IIssueParse,
    default: () => null,
  },
  closedIssues: {
    type: Object as () => IIssueParse,
    default: () => null,
  },
});

const repoStore = useRepoStore();
const tabRef = ref(TABS.OPEN);
const card_type = 'issue';

const openIssuesList = computed(() => {
  return props.openIssues?.issues || [];
});
const closedIssuesList = computed(() => {
  return props.closedIssues?.issues || [];
});

const changeTab = (tab: string) => {
  tabRef.value = tab;
};
const paginate = (value: number) => null;

const toLowerCase = (value: string) => value.toLowerCase();

const showPagination = (tab: string): boolean => {
  const issues = {
    openIssue: openIssuesList.value,
    closedIssue: closedIssuesList.value,
  };
  return tab === tabRef.value && issues[`${tab}Issue`].length > 6;
};
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.tab_view {
  border-radius: 6px;
  border: 1px solid $secondary-100;
  min-height: 10rem;
}
</style>
