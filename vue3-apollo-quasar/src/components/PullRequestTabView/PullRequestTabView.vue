<template>
  <div class="wrapper">
    <div class="tab_view">
      <IssuePullRequestTab
        @changeTab="changeTab"
        :openCounts="countList(PULL_REQUESTS.openPullRequest)"
        :closedCounts="countList(PULL_REQUESTS.closedPullRequest)"
        :tabType="card_type"
      />
      <div v-if="tabRef === TABS.OPEN">
        <IssuesPullRequestsCard
          v-for="(data, index) in PULL_REQUESTS.openPullRequest"
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
          <q-separator
            v-if="index !== PULL_REQUESTS.openPullRequest.length - 1"
          />
        </IssuesPullRequestsCard>
      </div>

      <div v-else>
        <IssuesPullRequestsCard
          v-for="(data, index) in PULL_REQUESTS.closedPullRequest"
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
          <q-separator
            v-if="index !== PULL_REQUESTS.closedPullRequest.length - 1"
          />
        </IssuesPullRequestsCard>
      </div>
    </div>
    <PaginationButtons
      v-if="showPagination(tabRef)"
      :isPrevActive="false"
      :isNextActive="true"
      @paginate="paginate"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
import { PULL_REQUESTS, TABS } from './data';

const tabRef = ref(TABS.OPEN);
const card_type = 'pullrequest';

const changeTab = (tab: string) => {
  tabRef.value = tab;
};
const paginate = (value) => null;

const toLowerCase = (value: string) => value.toLowerCase();
const countList = (array) => array.length;
const showPagination = (tab) =>
  tab === tabRef.value && PULL_REQUESTS[`${tab}PullRequest`].length > 6;
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.tab_view {
  border-radius: 6px;
  border: 1px solid $secondary-100;
  min-height: 10rem;
}
</style>
