<template>
  <div>
    <div class="org-header">
      <div class="q-pt-md q-mx-auto">
        <div class="row items-center" v-if="!loadingOrgProfileDetail">
          <span class="company_logo q-mr-sm rounded-borders">
            <img :src="orgProfileDetail?.avatarUrl" alt="company logo" />
          </span>
          <h1 class="text-h6">{{ orgProfileDetail?.name }}</h1>
        </div>
        <TabHeader :repositories="true" @triggerTab="changeTab" />
      </div>
    </div>
    <div class="wrapper" v-if="!loadingOrgRepos">
      <!-- Right side -->
      <div v-if="isQuerying" class="tab-contents q-mx-auto">
        <SearchFilter :languages="getLanguages" repoBtnText="New repository" />
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
            <a :href="usernameUrl" class="row items-center clear-filter">
              <q-icon
                name="fa fa-times"
                class="text-white rounded-borders clear-filter-icon q-mx-sm"
              />
              Clear filter
            </a>
          </div>
        </div>

        <q-tab-panels v-model="tab" class="q-mt-md">
          <q-tab-panel name="overview">
            <slot name="overview">
              <div class="text-h6">Overview</div>
            </slot>
          </q-tab-panel>

          <q-tab-panel name="repositories">
            <q-card flat bordered>
              <q-list separator>
                <q-item
                  v-for="{ node: repo } in filteredAndSortedRepos"
                  :key="repo.id"
                >
                  <slot name="repositories" :repo="repo"></slot>
                </q-item>
                <q-item v-if="!filteredAndSortedRepos.length" class="q-mt-xl">
                  <span class="text-h5 block q-mx-auto text-weight-bold">
                    {{ username }} doesn't have any repositories that match.
                  </span>
                </q-item>
              </q-list>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="projects">
            <slot name="projects">
              <div class="text-h6">Projects</div>
            </slot>
          </q-tab-panel>

          <q-tab-panel name="packages">
            <slot name="packages">
              <div class="text-h6">Packages</div>
            </slot>
          </q-tab-panel>

          <q-tab-panel name="stars">
            <slot name="stars">
              <div class="text-h6">Stars</div>
            </slot>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, computed } from 'vue';
import { Edges } from '@/composables/github/types';

export default defineComponent({
  name: 'ProfilePageLayout',
});
</script>

<script lang="ts" setup>
import { SearchFilter, TabHeader } from '@/components';
import {
  useOrgProfile,
  useOrganizationRepository,
  useSearch,
} from '@/composables';

import {
  FILTER_TYPE_OPTIONS,
  defaultFilterType,
  SORT_OPTIONS,
  defaultLanguage,
} from '@/components/SearchFilter/data';
import { modifyFilterTypeText, inArray, getTime, matchText } from '@/helpers';

const { getOrgProfile } = useOrgProfile();
const { getOrganizationRepositories } = useOrganizationRepository();

const tab = ref<string>('');
function changeTab(val: string) {
  tab.value = val;
}

const props = defineProps({
  username: String,
});

const { data: orgProfileDetail, loading: loadingOrgProfileDetail } =
  getOrgProfile(props.username);

const { data: orgRepos, loading: loadingOrgRepos } =
  getOrganizationRepositories(props.username);

const {
  searchData,
  filterTypeData,
  sortByData,
  languageData,
  isOnlySorted,
  isQuerying,
} = useSearch();

interface Repo extends Edges {
  isFork: boolean;
  isArchived: boolean;
}

const usernameUrl = computed((): string => `/${props.username}`);

const repoDataFilteredByType = (repos: Repo[]) => {
  let response = repos.slice();
  const filterType = filterTypeData.value?.filterType;
  if (filterType === FILTER_TYPE_OPTIONS.forks) {
    response = repos.filter((repo) => repo.node.isFork);
  } else if (filterType === FILTER_TYPE_OPTIONS.archived) {
    response = repos.filter((repo) => repo.node.isArchived);
  } else if (filterType === defaultFilterType) {
    response = repos;
  }
  return response;
};

// Function to sort filtered repos
const sortedRepoData = (repos: Repo[]) => {
  let response = repos.slice(); //need because repos.value is a read only and can't bemodified.
  if (sortByData.value?.sortby === SORT_OPTIONS.name) {
    response.sort((a, b) =>
      a.node.name.toLowerCase().localeCompare(b.node.name.toLowerCase()),
    );
  } else if (sortByData.value?.sortby === SORT_OPTIONS.stars) {
    response.sort((a, b) => b.node.stargazerCount - a.node.stargazerCount);
  } else {
    response.sort(
      (a, b) => getTime(b.node.updatedAt) - getTime(a.node.updatedAt),
    );
  }
  return response;
};

// Function to filter repos by language
const repoDataFilteredByLanguage = (repos: Repo[]) => {
  let response = repos.slice();
  const language = languageData.value?.language;
  if (repos && language && language !== defaultLanguage) {
    response = repos.filter((repo) =>
      matchText(repo?.node.primaryLanguage?.name, language),
    );
  } else if (language === defaultLanguage) {
    response = repos;
  }

  return response;
};

// Function to filter repos by search
const repoDataFilteredBySearch = (search: string) => {
  if (orgRepos?.value.repositories?.edges.length < 1) {
    return orgRepos?.value.repositories?.edges;
  }
  return orgRepos?.value.repositories?.edges.reduce((acc, repo) => {
    if (
      search &&
      !repo?.node.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return acc;
    }

    return [...acc, repo];
  }, []);
};

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

const getLanguages = computed((): { name: string }[] => {
  const languages = [];
  orgRepos?.value.repositories?.edges.forEach((repo: Repo) => {
    if (
      repo.node.primaryLanguage &&
      !inArray(languages, repo.node.primaryLanguage.name)
    ) {
      languages.push({
        name: repo.node.primaryLanguage.name,
      });
    }
  });
  languages.sort((a, b) => a.name.localeCompare(b.name));
  return languages;
});
</script>

<style lang="scss">
@import '../../styles/quasar.variables.scss';
.tab-contents {
  flex-grow: 1;
  max-width: 70rem;
}

.org-header {
  background-color: $primary-100;
  border-bottom: 1px solid $secondary-300;
  & > div {
    max-width: 70rem;
  }
}

.company_logo {
  border: 1px solid var(--color-border-muted);
  img {
    width: 2rem;
    height: 2rem;
  }
}

.usercard {
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}

.q-tab-panel {
  padding: 0 !important;
}
</style>
