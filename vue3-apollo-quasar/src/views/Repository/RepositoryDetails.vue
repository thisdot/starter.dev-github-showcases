<template>
  <q-page>
    <!-- TODO: Instead of using currentRepo?.data.isPrivate to determine visibility tag, use the actual visibility tag from GitHub (there's more than just "Public" & "Private". We also have "Internal" and potentially others)  -->
    <RepoSubHeader
      :username="currentRepo.owner"
      :repoName="currentRepo.name"
      :visibilityTag="currentRepo?.data.isPrivate ? 'Private' : 'Public'"
      :stars="currentRepo?.data.stargazerCount"
      :watch="currentRepo?.data.watcherCount"
      :forks="currentRepo?.data.forkCount"
      :issuesCount="currentRepo?.data.openIssueCount"
      :pullRequestsCount="currentRepo?.data.openPullRequestCount"
    />

    <section class="q-mx-auto q-my-xl" style="max-width: 60rem">
      <q-card flat bordered>
        <!-- <q-card-section> -->
        <FileExplorer :content-list="fileTree" />
        <!-- </q-card-section> -->
      </q-card>
    </section>

    <pre>{{ tree }}</pre>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

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

//? This structure is defined in the route for this 👇 in routes/index.ts
const { owner, repo } = $route.params as { owner: string; repo: string };

const { getRepoPage } = useRepoPage();

const { context: currentRepo, loading } = getRepoPage({
  name: repo,
  owner,
});

const { getRepoTree } = useRepoTree();
const { data: tree } = getRepoTree({
  owner,
  name: repo,
  branch: 'main',
  path: '',
});

const fileTree = computed(() =>
  tree.value.map((treeBranch) => ({
    isDirectory: treeBranch.type === 'tree',
    name: treeBranch.name,
    latestCommitMessage: 'Test commit', //TODO: Get this
    lastUpdated: 'Jul 15 2022', //TODO: Get this
    to: `${repo}/${treeBranch.path}`,
  })),
);
</script>
