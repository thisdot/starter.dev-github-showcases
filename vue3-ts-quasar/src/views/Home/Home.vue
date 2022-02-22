<template>
  <div
    class="row reverse-sm q-pb-lg"
    style="background-color: rgba(243, 244, 246)"
  >
    <div class="col-12 col-sm-auto">
      <!--  -->
      <GistsPanel />
    </div>
    <div class="col-12 col-sm-8 col-xl-6 q-px-lg q-pt-xl">
      <h1 class="text-weight-bold q-mb-md">Top repositories</h1>
      <q-card>
        <q-list>
          <q-item v-for="i in Array(10)" :key="i">
            <RepoCard v-bind="testRepoData" />
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; //* Components

export default defineComponent({
  name: 'Home',
});
</script>

<script lang="ts" setup>
import GistsPanel from '../../components/GistsPanel/GistsPanel.vue';
import RepoCard from '../../components/RepoCard/RepoCard.vue';

const testRepoData = {
  repoName: 'cowrywise-unsplashed',
  visibilityTag: 'Private',
  mainLanguage: {
    color: 'yellow',
    language: 'Javascript',
  },
  description:
    'Using basic pull requests to add your name and github link to BE A MEMBER of ZTM-ng',
  topics: [
    {
      name: 'JavaScript',
      url: '',
    },
    {
      name: 'css',
      url: '',
    },
    {
      name: 'graphql-api',
      url: '',
    },
  ],
  stars: 1,
  lastUpdated: 'on 23 Sep 2020',
};
</script>
