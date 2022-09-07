<template>
  <div class="wrapper">
    <div class="tab_view">
      <IssuePullRequestTab
        @changeTab="changeTab"
        :openCounts="countList(openIssuesData)"
        :closedCounts="countList(closedIssuesData)"
        :tabType="card_type"
      />
      <q-list class="open-issue" separator v-if="tabRef === TABS.OPEN">
        <IssuesPullRequestsCard
          v-for="(data, index) in openIssuesData"
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

      <q-list class="closed-issue" separator v-else>
        <IssuesPullRequestsCard
          v-for="(data, index) in closedIssuesData"
          :key="index"
          :state="toLowerCase(data.state)"
          :cardType="card_type"
          :author="data.author.login"
          :title="data.title"
          :url="data.url"
          :commentCount="data.comments.totalCount"
          :number="data.number"
          :createdAt="data.createdAt"
          :closedAt="data.closedAt"
        >
        </IssuesPullRequestsCard>
      </q-list>
    </div>
    <PaginationButtons v-if="showPagination(tabRef)" @paginate="paginate" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, computed } from 'vue';
import { IssuesData } from '@/composables/github/types';

export default defineComponent({
  name: 'IssueTabView',
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
  edges: IssuesData[];
};

const props = defineProps({
  openIssues: {
    type: Object as () => Edges,
    default: () => null,
  },
  closedIssues: {
    type: Object as () => Edges,
    default: () => null,
  },
});

const tabRef = ref(TABS.OPEN);
const card_type = 'issue';

const openIssuesData = computed(() => {
  const data = props.openIssues?.edges?.slice() || [];
  const result = data.map((res) => res.node);
  return result || [];
});
const closedIssuesData = computed(() => {
  const data = props.closedIssues?.edges?.slice() || [];
  const result = data.map((res) => res.node);
  return result || [];
});

const changeTab = (tab: string) => {
  tabRef.value = tab;
};
const paginate = (value: number) => null;

const toLowerCase = (value: string) => value.toLowerCase();
const countList = (array) => array.length;
const showPagination = (tab: string): boolean => {
  const issues = {
    openIssue: openIssuesData.value,
    closedIssue: closedIssuesData.value,
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
