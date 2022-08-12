<template>
  <div class="wrapper">
    <div class="tab_view">
      <IssuePullRequestTab
        @changeTab="changeTab"
        :openCounts="countList(ISSUES.openIssue)"
        :closedCounts="countList(ISSUES.closedIssue)"
        :tabType="card_type"
      />
      <q-list class="open-issue" separator v-if="tabRef === TABS.OPEN">
        <IssuesPullRequestsCard
          v-for="(data, index) in ISSUES.openIssue"
          :key="index"
          :state="toLowerCase(data.state)"
          :cardType="card_type"
          :author="data.author"
          :title="data.title"
          :url="data.url"
          :commentCount="data.comments"
          :number="data.number"
          :createdAt="data.createdAt"
        >
        </IssuesPullRequestsCard>
      </q-list>

      <q-list class="closed-issue" separator v-else>
        <IssuesPullRequestsCard
          v-for="(data, index) in ISSUES.closedIssue"
          :key="index"
          :state="toLowerCase(data.state)"
          :cardType="card_type"
          :author="data.author"
          :title="data.title"
          :url="data.url"
          :commentCount="data.comments"
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
import { defineComponent, ref } from 'vue';

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
import { ISSUES, TABS } from './data';

const tabRef = ref(TABS.OPEN);
const card_type = 'issue';

const changeTab = (tab: string) => {
  tabRef.value = tab;
};
const paginate = (value) => null;

const toLowerCase = (value: string) => value.toLowerCase();
const countList = (array) => array.length;
const showPagination = (tab) =>
  tab === tabRef.value && ISSUES[`${tab}Issue`].length > 6;
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.tab_view {
  border-radius: 6px;
  border: 1px solid $secondary-100;
  min-height: 10rem;
}
</style>
