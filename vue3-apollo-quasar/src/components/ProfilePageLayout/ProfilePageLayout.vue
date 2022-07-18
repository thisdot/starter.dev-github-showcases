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
        <div class="tab-contents col">
          <SearchFilter />
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
                  v-show="filterType && filterType !== filterTypeOption[0]"
                >
                  {{ modifyFilterTypeText(filterType) }}
                </strong>
                repositories
                <!-- search text -->
                <span v-show="search"
                  >matching <strong> {{ search }} </strong></span
                >
                <!-- Language -->
                <span v-show="language && language !== languageOption[0]">
                  written in <strong> {{ language }} </strong></span
                >
                sorted by
                <!-- Sorted text -->
                <strong>
                  {{ sortBy }}
                </strong>
              </small>
            </div>
            <div>
              <a :href="'/' + username" class="row items-center clear_filter">
                <q-icon
                  name="fa fa-times"
                  class="text-white rounded-borders clear_filter_icon q-mx-sm"
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
              <q-list v-if="filteredAndSortedRepos" separator>
                <q-item v-for="repo in filteredAndSortedRepos" :key="repo.id">
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

const getUserRepos = useUserRepos();
const user = useUserStore();
const tab = ref('');

// Test Variables
const filterTypeOption = ['All', 'Forks', 'Mirrors', 'Archived'];
const sortOption = ['Last update', 'Name', 'Stars'];
const languageOption = ['All', 'CSS', 'HTML'];
const search = ref('0');
const filterType = ref(filterTypeOption[0]);
const sortBy = ref(sortOption[2]);
const language = ref(languageOption[0]);
// Test variables ends here

const props = defineProps({
  username: String,
});

function changeTab(val) {
  tab.value = val;
}

const { repos, loading } = getUserRepos(props.username, false);

const isOnlySorted = computed(
  () =>
    sortBy.value &&
    !(
      search.value ||
      language.value !== languageOption[0] ||
      filterType.value !== filterTypeOption[0]
    ),
);

const modifyFilterTypeText = (filterText) => {
  if (filterText.endsWith('s')) {
    if (filterText.match(new RegExp('forks', 'i'))) {
      filterText = filterText.replace('s', 'ed');
    } else {
      filterText = filterText.replace('s', '');
    }
  }
  return filterText;
};

const searchFilter = (value) => repos.value.filter((repo) => repo.name.match(new RegExp(value, 'i')));
const typeFilter = (array, value) => {
  if (value === filterTypeOption[1]) {
    array = array.filter((repo) => repo.isForked);
  } else if (value === filterTypeOption[3]) {
    array = array.filter((repo) => repo.isArchived);
  }
  return array;
};
const languageFilter = (array, value) => null;

const filteredAndSortedRepos = computed(() => {
  let resp = [];
  /*****
   *TODO:
   - filter using search text
   - filter using filter type value provided value not All
   - filter using language value provided value not All
   - then finaly sort
   * *****/
  resp = searchFilter(search.value);
  if (filterType.value !== filterTypeOption[0]) {
    resp = typeFilter(resp, filterType.value);
  }

  if (language.value !== languageOption[0]) {
    resp = languageFilter(resp, language.value);
  }

  return resp;
});
</script>

<style lang="scss" scoped>
@import '@/App.css';
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

.clear_filter {
  text-decoration: none;
  color: $secondary-200;
  & > &_icon {
    padding: 0.1rem;
    background-color: $secondary-200;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: $primary;
    .clear_filter_icon {
      background-color: $primary;
    }
  }
  transition: all 0.3s ease-in-out;
}
</style>
