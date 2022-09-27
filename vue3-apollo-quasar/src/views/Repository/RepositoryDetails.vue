<template>
  <q-page v-if="!loading">
    <RepoSubHeader
      :username="owner"
      :repo-name="repo"
      :visibility-tag="visibility"
      :stars="stargazerCount"
      :watch="watcherCount"
      :forks="forkCount"
      :issues-count="openIssueCount"
      :pull-requests-count="openPullRequestCount"
    >
      <template #code>
        <Code
          :owner="owner"
          :repo="repo"
          :dir-path="dirpath"
          :branch="branch"
          :repo-dir-path="repoDirPath"
        />
      </template>
      <template #issues>
        <Issues :owner="owner" :repo="repo" />
      </template>
      <template #pullrequests>
        <PullRequests :owner="owner" :repo="repo" />
      </template>
    </RepoSubHeader>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';

export default defineComponent({
  name: 'PageRepositoryDetails',
});
</script>

<script lang="ts" setup>
import { Issues } from './Issues';
import { RepoSubHeader } from '@/components';
import { Code } from './Code';
import { PullRequests } from './PullRequests';
import { useRoute } from 'vue-router';
import { useRepoPage } from '@/composables';
const $route = useRoute();

const branch = ref('main');
const repoDirPath = ref('');
const visibility = ref('');
const stargazerCount = ref(0);
const watcherCount = ref(0);
const forkCount = ref(0);
const openIssueCount = ref(0);
const openPullRequestCount = ref(0);

//? This structure is defined in the route for this 👇 in routes/index.ts
const { owner, repo, dirpath } = $route.params as {
  owner: string;
  repo: string;
  dirpath: string;
};

const { getRepoPage } = useRepoPage();

const { context: currentRepo, loading } = getRepoPage({
  name: repo,
  owner,
});

watch(currentRepo, (res) => {
  branch.value = res?.branch || branch.value;
  repoDirPath.value = res?.path || '';
  visibility.value = res?.data?.visibility || 'public';
  stargazerCount.value = res?.data?.stargazerCount || 0;
  watcherCount.value = res?.data?.watcherCount || 0;
  forkCount.value = res?.data?.forkCount || 0;
  openIssueCount.value = res?.data?.openIssueCount || 0;
  openPullRequestCount.value = res?.data?.openPullRequestCount || 0;
});
</script>

<style lang="scss" scoped>
.code-section {
  max-width: 70rem;
}
.file-text {
  white-space: pre-wrap;
}
</style>
