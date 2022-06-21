<template>
  <div>Testing</div>
  <Auth v-if="!user?.isLoggedIn" />
  <div v-else-if="!loading">
    <div v-for="repo in repos" :key="repo.id">
      <div class="container">
        <div class="content">
          <h3 class="q-mb-xs">
            <router-link :to="`/${owner}/${repo.name}`">
              <a class="headingLink">{{ repo.name }}</a>
            </router-link>
            <PrivacyBadge :isPrivate="repo.isPrivate" />
          </h3>
          <div class="description">{{ repo.description }}</div>
          <RepoMeta
            :language="repo.language"
            :languageColor="repo.languageColor"
            :forkCount="repo.forkCount"
            :stargazerCount="repo.stargazerCount"
            :updatedAt="repo.updatedAt"
          />
        </div>
        <div class="aside">
          <button class="starBtn">
            <q-icon class="starIcon" name="far fa-star"></q-icon>
            Star
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <ContentLoader width="{325}" height="{125}" viewBox="0 0 325 125">
      <rect x="5" y="5" rx="5" ry="5" width="200" height="15" />
      <rect x="215" y="5" rx="5" ry="5" width="50" height="15" />
      <rect x="5" y="40" rx="5" ry="5" width="320" height="50" />
      <rect x="5" y="110" rx="5" ry="5" width="75" height="10" />
      <rect x="90" y="110" rx="5" ry="5" width="75" height="10" />
    </ContentLoader>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'UserRepos',
});
</script>

<script lang="ts" setup>
import { ContentLoader } from 'vue-content-loader'
import { PrivacyBadge, RepoMeta } from '@/components';
import { useUserStore } from '@/store/userStore';
import { Auth } from '@/views';
import { useUserRepos } from '@/composables';

const getUserRepos = useUserRepos();
const props = defineProps({
  username: String,
});

const user = useUserStore();
const { repos, loading } = getUserRepos(props.username, false);
console.log(`HERE BE REPOS ${repos}`);
</script>

<style>
.container {
  display: grid;
  padding: 2rem 0 2rem 0;
  border-bottom-width: 1px;
  border-color: rgb(229 231 235);
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: 1rem;
}

.container:first-of-type {
  border-top-width: 1px;
}

.content {
  grid-column: span 12 / span 12;
}

.headingLink {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(37 99 235 / 1);
  font-weight: 600;
  margin-right: 0.75rem;
}

.hover:headinglink {
  text-decoration-line: underline;
}

.description {
  color: rgb(75 85 99 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  max-width: 65ch;
}

.aside {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  grid-column: span 12 / span 12;
}

.starBtn {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.375rem;
  background-color: rgb(243 244 246 / 0.75);
  border-width: 1px;
  border-color: rgb(209 213 219 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(31 41 55 / 1);
}

.hover:starbtn {
  background-color: rgb(229 231 235 / 0.5);
}

.starIcon {
  width: 1rem;
  height: 1rem;
  color: rgb(75 85 99 / 1);
  margin-right: 0.25rem;
}

@media (min-width: 768px) {
  .content {
    grid-column: span 7 / span 7;
  }
  .aside {
    grid-column: span 5 / span 5;
  }
}
</style>
