<template>
  <!-- Home page -->
  <div
    class="row container--home q-pb-lg"
    style="background-color: rgba(243, 244, 246)"
  >
    <div class="col">
      <!--  -->
      <GistsPanel class="card--gists" />
    </div>
    <div class="col col-md-9 col-lg-10 q-px-xl q-pt-xl">
      <h1 class="text-weight-bold text-h5 text-dark q-mb-md">
        Top repositories
      </h1>
      <q-card flat>
        <template v-if="!reposLoading">
          <q-list v-if="repoList" separator>
            <q-item v-for="repo in repoList" :key="repo.id">
              <RepoCard v-bind="repo" />
            </q-item>
          </q-list>

          <!-- Repositories were NOT found -->
          <div v-else>
            <h2>Repos not found</h2>
          </div>
        </template>
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
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<script lang="ts" setup>
import { GistsPanel, RepoCard } from '@/components';
import { useRepository } from '@/composables';

const { getTopRepositories } = useRepository();

const { data: repoData, loading: reposLoading } = getTopRepositories();

const repoList = computed(() => repoData.value?.topRepositories ?? null);
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  .container--home {
    flex-direction: column-reverse !important;
    .card--gists {
      margin-top: 3rem;
    }
  }
}
</style>
