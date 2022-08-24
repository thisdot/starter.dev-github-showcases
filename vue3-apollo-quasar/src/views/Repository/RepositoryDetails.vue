<template>
  <q-page v-if="!loading">
    <!-- TODO: Instead of using currentRepo?.data.isPrivate to determine visibility tag, use the actual visibility tag from GitHub (there's more than just "Public" & "Private". We also have "Internal" and potentially others)  -->
    <RepoSubHeader
      :username="owner"
      :repoName="repo"
      :visibilityTag="currentRepo?.data.visibility"
      :stars="currentRepo?.data.stargazerCount"
      :watch="currentRepo?.data.watcherCount"
      :forks="currentRepo?.data.forkCount"
      :issuesCount="currentRepo?.data.openIssueCount"
      :pullRequestsCount="currentRepo?.data.openPullRequestCount"
    />
    <section class="q-mx-auto q-my-xl code-section">
      <q-card flat bordered>
        <FileExplorer v-if="!fileTree.isBlob" :content-list="fileTree" />
        <pre class="file-text" v-else>{{ fileTree.text }}</pre>
      </q-card>
    </section>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from 'vue';

export default defineComponent({
  name: 'PageRepositoryDetails',
});
</script>

<script lang="ts" setup>
import { ExplorerContent } from '@/components/FileExplorer/FileExplorerNav.vue';
import { FileExplorer, RepoSubHeader } from '@/components';
import { useRoute } from 'vue-router';
import { useRepoPage, useRepoTree } from '@/composables';
const $route = useRoute();

const branch = ref('main');
const repoDirPath = ref('');

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

watch(currentRepo, (data) => {
  branch.value = data.branch;
  repoDirPath.value = data.path;
});

const { getRepoTree } = useRepoTree();
const { data: tree } = getRepoTree({
  owner,
  name: repo,
  branch: branch.value,
  path: dirpath ? dirpath : repoDirPath.value,
});

const fileTree = computed(() => {
  if (!Array.isArray(tree.value)) {
    return { text: tree.value, isBlob: true };
  }

  return tree.value.map(
    (treeBranch): ExplorerContent => ({
      isDirectory: treeBranch.type === 'tree',
      name: treeBranch.name,
      latestCommitMessage: 'Test commit', //TODO: Get this
      lastUpdated: 'Jul 15 2022', //TODO: Get this
      to: `${!dirpath ? `${repo}/` : `/${owner}/${repo}/`}${treeBranch.path}`,
    }),
  );
});
</script>

<style lang="scss" scoped>
.code-section {
  max-width: 60rem;
}
.file-text {
  white-space: pre-wrap;
}
</style>
