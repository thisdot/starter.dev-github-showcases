<template>
  <div class="wrapper">
    <div class="tab_view">
      <IssuePullRequestTab
        @changeTab="changeTab"
        :openCounts="countList(openPullRequestsData)"
        :closedCounts="countList(closedPullRequestsData)"
        :tabType="card_type"
      />
      <q-list class="open-pr" separator v-if="tabRef === TABS.OPEN">
        <IssuesPullRequestsCard
          v-for="(data, index) in openPullRequestsData"
          :key="index"
          :state="toLowerCase(data.state)"
          :cardType="card_type"
          :author="data.author.login"
          :title="data.title"
          :url="data.url"
          :commentCount="data.comments.totalCount"
          :number="data.number"
          :createdAt="data.createdAt"
        >
        </IssuesPullRequestsCard>
      </q-list>

      <q-list class="closed-pr" separator v-else>
        <IssuesPullRequestsCard
          v-for="(data, index) in closedPullRequestsData"
          :key="index"
          :state="toLowerCase(data.state)"
          :cardType="card_type"
          :author="data.author.login"
          :title="data.title"
          :url="data.url"
          :commentCount="data.comments.totalCount"
          :number="data.number"
          :createdAt="data.createdAt"
        >
        </IssuesPullRequestsCard>
      </q-list>
    </div>
    <PaginationButtons v-if="showPagination(tabRef)" @paginate="paginate" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, computed } from 'vue';
import { PullRequestData } from '@/composables/github/types';

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

type Edges = {
  edges: PullRequestData[];
};

const props = defineProps({
  openPullRequests: {
    type: Object as () => Edges,
    default: () => null,
  },
  closedPullRequests: {
    type: Object as () => Edges,
    default: () => null,
  },
});

const tabRef = ref(TABS.OPEN);
const card_type = 'pullrequest';

const openPullRequestsData = computed(() => {
  const data = props.openPullRequests?.edges?.slice() || [];
  const result = data.map((res) => res.node);
  return result || [];
});
const closedPullRequestsData = computed(() => {
  const data = props.closedPullRequests?.edges?.slice() || [];
  const result = data.map((res) => res.node);
  return result || [];
});

const changeTab = (tab: string) => {
  tabRef.value = tab;
};
const paginate = (value) => null;

const toLowerCase = (value: string) => value.toLowerCase();
const countList = (array) => array.length;
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
</style>
