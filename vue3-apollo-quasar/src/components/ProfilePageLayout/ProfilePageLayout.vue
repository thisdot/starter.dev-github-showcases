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
        <div class="tab-contents">
          <SearchFilter />

          <q-tab-panels v-model="tab">
            <q-tab-panel name="overview">
              <div class="text-h6">Overview</div>
              <slot name="overview"></slot>
            </q-tab-panel>

            <q-tab-panel name="repositories">
              <q-list v-if="repos" separator>
                <q-item v-for="repo in repos" :key="repo.id">
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
import { defineComponent, defineProps, ref } from 'vue';

export default defineComponent({
  name: 'ProfilePageLayout',
});
</script>

<script lang="ts" setup>
import { UserProfileCard, SearchFilter, TabHeader, RepoCard } from '..';
import { useUserStore } from '@/store/userStore';
import { Auth } from '@/views';
import { useUserRepos } from '@/composables';
import { useFilter } from '@/ccomposables';
const getUserRepos = useUserRepos();
const props = defineProps({
  username: String,
});
const tab = ref('');
function changeTab(val) {
  tab.value = val;
}

const user = useUserStore();
// TODO: filter repo against search input
const { repos, loading } = getUserRepos(props.username, false);
// const filteredRepos = useFilter(repos, state);
</script>

<style lang="scss" scoped>
@import '../../App.css';
.tab-contents {
  flex-grow: 1;
}

.usercard {
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}
</style>
