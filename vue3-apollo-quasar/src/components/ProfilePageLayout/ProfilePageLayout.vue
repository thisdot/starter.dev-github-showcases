<template>
  <div v-if="!loading">
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
        <div v-if="isQuerying" class="tab-contents col">
          <SearchFilter :languages="getLanguages" />
          <q-separator class="q-mt-sm" />
          <div
            class="text-caption q-my-md row justify-between items-center"
            v-show="!isOnlySorted"
          >
            <div class="col">
              <small class="text-caption text-lowercase">
                <!-- length of filtered array -->
                <strong>{{ filteredAndSortedRepos.length }}</strong>
                results for
                <!-- repo type -->
                <strong
                  v-show="
                    filterTypeData.filterType &&
                    filterTypeData.filterType !== defaultFilterType
                  "
                >
                  {{ modifyFilterTypeText(filterTypeData.filterType) }}
                </strong>
                repositories
                <!-- search text -->
                <span v-show="searchData.search"
                  >matching <strong> {{ searchData.search }} </strong></span
                >
                <!-- Language -->
                <span
                  v-show="
                    languageData.language &&
                    languageData.language !== defaultLanguage
                  "
                >
                  written in
                  <strong> {{ languageData.language }} </strong></span
                >
                sorted by
                <!-- Sorted text -->
                <strong>
                  {{ sortByData.sortby }}
                </strong>
              </small>
            </div>
            <div>
              <a :href="'/' + username" class="row items-center clear-filter">
                <q-icon
                  name="fa fa-times"
                  class="text-white rounded-borders clear-filter-icon q-mx-sm"
                />
                Clear filter
              </a>
            </div>
          </div>
          <q-separator v-show="!isOnlySorted" />

          <q-tab-panels v-model="tab">
            <q-tab-panel name="overview">
              <div class="text-h6">Overview</div>
              <slot name="overview"></slot>
            </q-tab-panel>
            <q-tab-panel name="repositories">
              <q-list separator>
                <q-item v-for="repo in filteredAndSortedRepos" :key="repo.id">
                  <slot name="repositories" :repo="repo"></slot>
                </q-item>
                <q-item v-if="!filteredAndSortedRepos.length" class="q-mt-xl">
                  <span class="text-h5 block q-mx-auto text-weight-bold">
                    {{ username }} doesn't have any repositories that match.
                  </span>
                </q-item>
              </q-list>
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
import { UserTopRepo } from '@/composables/github/types';

export default defineComponent({
  name: 'ProfilePageLayout',
});
</script>

<script lang="ts" setup>
import { UserProfileCard, SearchFilter, TabHeader } from '@/components';
import { useUserRepo } from '@/composables';
import {
  SEARCH_QUERY,
  FILTER_TYPE_QUERY,
  LANGUAGE_QUERY,
  SORT_BY_QUERY,
} from './query';
import {
  FILTER_TYPE_OPTIONS,
  defaultFilterType,
  SORT_OPTIONS,
  defaultLanguage,
} from '@/components/SearchFilter/data';

const { getUserRepos } = useUserRepo();
const tab = ref<string>('');

const props = defineProps({
  username: String,
});

function changeTab(val: string) {
  tab.value = val;
}

interface Repo extends UserTopRepo {
  isFork: boolean;
  isArchived: boolean;
}

const owner = computed(() => {
  return {
    login: props.username,
  };
});

const { repos, loading } = getUserRepos(props.username);

const { result: searchData, loading: loadingSearch } = useQuery<{
  search: string;
  loading: boolean;
}>(SEARCH_QUERY);

const { result: filterTypeData, loading: loadingFilterType } = useQuery<{
  filterType: string;
  loading: boolean;
}>(FILTER_TYPE_QUERY);

const { result: sortByData, loading: loadingSortBy } = useQuery<{
  sortby: string;
  loading: boolean;
}>(SORT_BY_QUERY);

const { result: languageData, loading: loadingLanguage } = useQuery<{
  language: string;
  loading: boolean;
}>(LANGUAGE_QUERY);

const isOnlySorted = computed(
  () =>
    sortByData.value?.sortby &&
    !(
      searchData?.value?.search ||
      languageData?.value?.language !== defaultLanguage ||
      filterTypeData?.value?.filterType !== defaultFilterType
    ),
);

const repoDataFilteredByType = (repos: Repo[]) => {
  let response = repos.slice();
  const filterType = filterTypeData.value?.filterType;
  if (filterType === FILTER_TYPE_OPTIONS.forks) {
    response = repos.filter((repo) => repo.isFork);
  } else if (filterType === FILTER_TYPE_OPTIONS.archived) {
    response = repos.filter((repo) => repo.isArchived);
  } else if (filterType === defaultFilterType) {
    response = repos;
  }
  return response;
};

const getTime = (time: string) => new Date(time).getTime();

// Function to sort filtered repos
const sortedRepoData = (repos: Repo[]) => {
  let response = repos.slice(); //need because repos.value is a read only and can't bemodified.
  if (sortByData.value?.sortby === SORT_OPTIONS.name) {
    response.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );
  } else if (sortByData.value?.sortby === SORT_OPTIONS.stars) {
    response.sort((a, b) => (b.stargazerCount > a.stargazerCount ? 1 : -1));
  } else {
    response.sort((a, b) =>
      getTime(b.updatedAt) - getTime(a.updatedAt) ? 1 : -1,
    );
  }
  return response;
};

const inArray = (array, target) => {
  return array.find((arr) => arr.name === target);
};

const getLanguages = computed(() => {
  const languages = [];
  repos.value.forEach((repo: Repo) => {
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

const matchText = (target, value): boolean =>
  target?.match(new RegExp(value, 'i'));

// Function to filter repos by language
const repoDataFilteredByLanguage = (repos: Repo[]) => {
  let response = repos.slice();
  const language = languageData.value?.language;
  if (repos && language && language !== defaultLanguage) {
    response = repos.filter((repo) =>
      matchText(repo?.primaryLanguage?.name, language),
    );
  } else if (language === defaultLanguage) {
    response = repos;
  }

  return response;
};

// Function to filter repos by search
const repoDataFilteredBySearch = (search: string) => {
  if (repos.value.length < 1) {
    return repos.value;
  }
  return repos.value.reduce((acc, repo) => {
    if (
      search !== '' &&
      !repo?.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return acc;
    }

    return [...acc, repo];
  }, []);
};

const modifyFilterTypeText = (filterText: string) => {
  if (filterText.endsWith('s')) {
    if (filterText.match(new RegExp('forks', 'i'))) {
      filterText = filterText.replace('s', 'ed');
    } else {
      filterText = filterText.replace('s', '');
    }
  }
  return filterText;
};

const isQuerying = computed(
  (): boolean =>
    !!(loadingLanguage || loadingFilterType || loadingSearch || loadingSortBy),
);

const filteredAndSortedRepos = computed(() => {
  let response: Repo[];
  response = repoDataFilteredBySearch(searchData?.value?.search || '');

  if (filterTypeData.value?.filterType !== defaultFilterType) {
    response = repoDataFilteredByType(response);
  }

  if (languageData.value?.language !== defaultLanguage) {
    response = repoDataFilteredByLanguage(response);
  }

  response = sortedRepoData(response);

  return response;
});
</script>

<style lang="scss" scoped>
@import '../../App.css';
@import '@/styles/quasar.variables.scss';
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

.clear-filter {
  text-decoration: none;
  color: $secondary-200;
  & > &-icon {
    padding: 0.1rem;
    background-color: $secondary-200;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: $primary;
    .clear-filter-icon {
      background-color: $primary;
    }
  }
  transition: all 0.3s ease-in-out;
}
</style>
