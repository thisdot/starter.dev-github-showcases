<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RepositoryDetails',
});
</script>

<script lang="ts" setup>
import { RepoSubHeader } from '@/components';
import { useRoute } from 'vue-router';
import { useRepoPage, useRepoTree } from '@/composables';
const $route = useRoute();

//? This structure is defined in the route for this 👇 in routes/index.ts
const routeParams = $route.params as { owner: string; repo: string };

const { getRepoPage } = useRepoPage();

const { context: currentRepo, loading } = getRepoPage({
  name: routeParams.repo,
  owner: routeParams.owner,
});
</script>
