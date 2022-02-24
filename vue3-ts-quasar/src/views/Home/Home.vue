<template>
  <div
    class="row container--home q-pb-lg"
    style="background-color: rgba(243, 244, 246)"
  >
    <div class="col-12 col-sm-3 col-lg-2">
      <!--  -->
      <GistsPanel class="card--gists" />
    </div>
    <div class="col-12 col-sm-8 col-xl-6 q-px-lg q-pt-xl">
      <h1 class="text-weight-bold text-h5 text-dark q-mb-md">
        Top repositories
      </h1>
      <q-card>
        <q-list>
          <q-item v-for="i in Array(10)" :key="i">
            <RepoCard v-bind="testRepoData" />
          </q-item>
        </q-list>
      </q-card>

      <div class="row full-width items-center justify-center q-mt-lg">
        <q-btn unelevated color="positive" to="/profile"
          >View repositories</q-btn
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<script lang="ts" setup>
import { GistsPanel, RepoCard } from '@/components';

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

<style lang="scss" scoped>
@media (max-width: 600px) {
  .container--home {
    flex-direction: column-reverse !important;

    .card--gists {
      margin-top: 3rem;
    }
  }
}
</style>
