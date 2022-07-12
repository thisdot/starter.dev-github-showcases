<template>
  <Auth v-if="!user?.isLoggedIn" />
  <div v-else-if="!loading">
    <TabHeader
      :overview="true"
      :repositories="true"
      :projects="true"
      :packages="true"
      :stars="true"
      @triggerTab="changeTab"
    />
    <div class="wrapper">
      <div class="row" style="--gap: 0">
        <!-- Left side -->
        <div class="usercard">
          <UserProfileCard :username="username" />
        </div>
        <!-- Right side -->
        <div v-if="!loadingSearch" class="tab-contents col">
          <SearchFilter />
          <q-tab-panels v-model="tab">
            <q-tab-panel name="overview">
              <div class="text-h6">Overview</div>
              <slot name="overview"></slot>
            </q-tab-panel>
            <q-tab-panel name="repositories">
              <q-list v-if="repos" separator>
                <q-item v-for="repo in filteredRepos" :key="repo.id">
                  <RepoCard
                    :name="repo.name"
                    :visibility="repo.visibility"
                    :description="repo.description"
                    :primaryLanguage="repo.primaryLanguage"
                    :stargazerCount="repo.stargazerCount"
                    :forkCount="repo.forkCount"
                    :updatedAt="repo.updatedAt"
                  />
                </q-item>
              </q-list>
              <slot name="repositories"></slot>
            </q-tab-panel>

            <q-tab-panel name="projects">
              <div class="text-h6">Projects</div>
              <slot name="projects"></slot>
            </q-tab-panel>

            <q-tab-panel name="packages">
              <div class="text-h6">Packages</div>
              <slot name="packages"></slot>
            </q-tab-panel>

            <q-tab-panel name="stars">
              <div class="text-h6">Stars</div>
              <slot name="stars"></slot>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineProps, ref } from 'vue';

export default defineComponent({
  name: 'ProfilePageLayout',
});
</script>

<script lang="ts" setup>
import { UserProfileCard, SearchFilter, TabHeader, RepoCard } from '..';
import { useUserStore } from '@/store/userStore';
import { Auth } from '@/views';
import { useUserRepos } from '@/composables';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const getUserRepos = useUserRepos();
const props = defineProps({
  username: String,
});
const tab = ref('');
function changeTab(val) {
  tab.value = val;
}

const SEARCH_QUERY = gql`
  query Search {
    search @client
  }
`;

const { result: searchData, loading: loadingSearch } = useQuery(SEARCH_QUERY);
const user = useUserStore();
const { repos, loading } = getUserRepos(props.username, false);
const filteredRepos = computed(() => {
  if (repos.value.length < 1) {
    return repos;
  }
  return repos.value.reduce((acc, repo) => {
    if (
      searchData?.value?.search !== '' &&
      !repo.name
        .toLocaleLowerCase()
        .includes(searchData?.value?.search?.toLocaleLowerCase())
    ) {
      return acc;
    }

    return [...acc, repo];
  }, []);
});
</script>

<style lang="scss" scoped>
@import '../../App.css';
.tab-contents {
  flex-grow: 1;
}

.usercard {
  display: none;
  position: relative;
  z-index: 20;

  grid-column: span 12 / span 12;
  @media (min-width: 768px) {
    top: -3rem;
    grid-column: span 4 / span 4;
  }

  @media (min-width: 1024px) {
    display: block;
  }

  @media (min-width: 1280px) {
    grid-column: span 3 / span 3;
  }
}
</style>
