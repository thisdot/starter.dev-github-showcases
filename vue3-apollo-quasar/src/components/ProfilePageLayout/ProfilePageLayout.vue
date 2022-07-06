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
      <div class="row">
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

            <q-tab-panel name="repositories" class="repos">
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

const getUserRepos = useUserRepos();
const props = defineProps({
  username: String,
});
const tab = ref('');
function changeTab(val) {
  tab.value = val;
}

const user = useUserStore();
const { repos, loading } = getUserRepos(props.username, false);
</script>

<style lang="scss" scoped>
@import '../../App.css';
.tab-contents {
  flex-grow: 1;
  grid-column: span 6 / span 6;

  @media (min-width: 768px) {
    grid-column: span 8 / span 8;
  }
  @media (min-width: 1280px) {
    grid-column: span 9 / span 9;
  }
}

.wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 1536px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.row {
  display: grid;
  grid-template-columns: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;
  }
}

.repos {
  @media (min-width: 768px) {
    width: max-content;
  }
}

.usercard {
  display: block;
  position: relative;
  z-index: 20;
  grid-column: span 12 / span 12;

  @media (min-width: 768px) {
    top: -3rem;
    grid-column: span 4 / span 4;
  }
  @media (min-width: 1280px) {
    grid-column: span 3 / span 3;
  }
}
</style>
