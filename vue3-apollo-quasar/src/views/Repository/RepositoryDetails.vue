<template>
  <q-page v-if="!loading">
    <!-- TODO: Instead of using currentRepo?.data.isPrivate to determine visibility tag, use the actual visibility tag from GitHub (there's more than just "Public" & "Private". We also have "Internal" and potentially others)  -->
    <RepoSubHeader
      :username="owner"
      :repoName="repo"
      :visibilityTag="visibility"
      :stars="stargazerCount"
      :watch="watcherCount"
      :forks="forkCount"
      :issuesCount="openIssueCount"
      :pullRequestsCount="openPullRequestCount"
    />
    <section class="q-mx-auto q-my-xl code-section">
      <BranchMenu :branches="repoBranches" />
      <q-card flat bordered class="q-mt-md">
        <FileExplorer v-if="!fileTree.isBlob" :content-list="fileTree.data" />
        <pre class="file-text" v-else>{{ fileTree.text }}</pre>
      </q-card>
    </section>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from 'vue';
import { ExplorerContent } from '@/components/FileExplorer/types';

export default defineComponent({
  name: 'PageRepositoryDetails',
});
</script>

<script lang="ts" setup>
import { FileExplorer, RepoSubHeader, BranchMenu } from '@/components';
import { useRoute } from 'vue-router';
import { useRepoPage, useRepoTree, useRepoBranches } from '@/composables';
const $route = useRoute();
// import { FileExplorer, RepoSubHeader } from '@/components';
// import { useRoute } from 'vue-router';
// import { useRepoPage, useRepoTree } from '@/composables';
// const $route = useRoute();

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
  branch.value = res?.branch || 'main';
  repoDirPath.value = res?.path || '';
  visibility.value = res?.data?.visibility || 'public';
  stargazerCount.value = res?.data?.stargazerCount || 0;
  watcherCount.value = res?.data?.watcherCount || 0;
  forkCount.value = res?.data?.forkCount || 0;
  openIssueCount.value = res?.data?.openIssueCount || 0;
  openPullRequestCount.value = res?.data?.openPullRequestCount || 0;
});

const { getRepoTree } = useRepoTree();
const { data: tree } = getRepoTree({
  owner,
  name: repo,
  branch: branch.value,
  path: dirpath ? dirpath : repoDirPath.value,
});

type FileTree = {
  text?: string | number | unknown;
  data?: ExplorerContent[];
  isBlob: boolean;
};

const fileTree = computed((): FileTree => {
  if (!Array.isArray(tree?.value)) {
    return { text: tree?.value, isBlob: true };
  }
  const result = tree.value.map(
    (treeBranch): ExplorerContent => ({
      isDirectory: treeBranch.type === 'tree',
      name: treeBranch.name,
      latestCommitMessage: 'Test commit', //TODO: Get this
      lastUpdated: 'Jul 15 2022', //TODO: Get this
      to: `${!dirpath ? `${repo}/` : `/${owner}/${repo}/`}${treeBranch.path}`,
    }),
  );
  return {
    isBlob: false,
    data: result,
  };
});

const { getRepoBranches } = useRepoBranches();
const { data: branches } = getRepoBranches({
  owner,
  name: repo,
});
const repoBranches = computed(() => branches?.value.slice());
</script>

<style lang="scss" scoped>
.code-section {
  max-width: 60rem;
}
.file-text {
  white-space: pre-wrap;
}
</style>
