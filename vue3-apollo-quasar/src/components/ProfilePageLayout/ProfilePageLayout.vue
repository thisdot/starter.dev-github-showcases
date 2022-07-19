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
        <div class="tab-contents col" v-if="!loadingLanguage">
          <SearchFilter :languages="getLanguages" />
          <q-tab-panels v-model="tab">
            <q-tab-panel name="overview">
              <div class="text-h6">Overview</div>
              <slot name="overview"></slot>
            </q-tab-panel>
            <q-tab-panel name="repositories">
              <q-list v-if="repos" separator>
                <q-item
                  v-for="repo in repoDataFilteredByLanguage"
                  :key="repo.id"
                >
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
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { SORT_OPTIONS } from '@/components/SearchFilter/data';

export default defineComponent({
  name: 'ProfilePageLayout',
});
</script>

<script lang="ts" setup>
import {
  UserProfileCard,
  SearchFilter,
  TabHeader,
  RepoCard,
} from '@/components';
import { useUserStore } from '@/store/userStore';
import { Auth } from '@/views';
import { useUserRepos } from '@/composables';
import { defaultLanguageSort } from '@/components/SearchFilter/data';

const getUserRepos = useUserRepos();
const user = useUserStore();
const tab = ref('');

const props = defineProps({
  username: String,
});

function changeTab(val) {
  tab.value = val;
}

const SORT_BY_QUERY = gql`
  query SorBy {
    sortby @client
  }
`;
const { result: sortByData, loading: loadingSortBy } = useQuery(SORT_BY_QUERY);

const { repos, loading } = getUserRepos(props.username, false);

const getTime = (time) => new Date(time).getTime();

const sortedRepoData = computed(() => {
  let resp = repos.value.slice(); //need because repos.value is a read only and can't bemodified.
  if (sortByData.value?.sortby === SORT_OPTIONS.name) {
    resp.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1));
  } else if (sortByData.value?.sortby === SORT_OPTIONS.stars) {
    resp.sort((a, b) => (b.stargazerCount > a.stargazerCount ? 1 : -1));
  } else {
    resp.sort((a, b) => (getTime(b.updatedAt) - getTime(a.updatedAt) ? 1 : -1));
  }
  return resp;
});
const LANGUAGE_QUERY = gql`
  query Language {
    language @client
  }
`;

const { result: languageData, loading: loadingLanguage } =
  useQuery(LANGUAGE_QUERY);

const matchText = (target, value) => target?.match(new RegExp(value, 'i'));

const repoDataFilteredByLanguage = computed(() => {
  let resp: any = [];
  const language = languageData.value?.language;
  if (repos.value && language && language !== defaultLanguageSort) {
    resp = repos.value.filter((repo) =>
      matchText(repo?.primaryLanguage?.name, language),
    );
  } else if (language === defaultLanguageSort) {
    resp = repos.value;
  }

  return resp;
});

const inArray = (array, target) => {
  return array.find((arr) => arr.name === target);
};

const getLanguages = computed(() => {
  const languages = [];
  repos.value.forEach((repo) => {
    if (
      repo.primaryLanguage &&
      !inArray(languages, repo.primaryLanguage.name)
    ) {
      languages.push({
        name: repo.primaryLanguage.name,
      });
    }
  });
  languages.sort((a, b) => (a.name > b.name ? 1 : -1));
  return languages;
});
const SEARCH_QUERY = gql`
  query Search {
    search @client
  }
`;

const { result: searchData, loading: loadingSearch } = useQuery(SEARCH_QUERY);
const filteredRepos = computed(() => {
  if (repos.value.length < 1) {
    return repos;
  }
  return repos.value.reduce((acc, repo) => {
    if (
      searchData?.value?.search !== '' &&
      !repo?.name
        ?.toLocaleLowerCase()
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
