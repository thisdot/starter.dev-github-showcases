<template>
  <q-card class="card--gists-panel full-height q-pt-lg q-px-lg" flat square>
    <q-separator></q-separator>
    <q-card-section>
      <h6 class="text-weight-bold text-dark">Gists</h6>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section v-if="!loading">
      <q-list v-for="gist in gistList" :key="gist.id">
        <q-item class="ellipsis">
          <a :href="gist.url" target="__blank">{{ gist.name }}</a>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GistsPanel',
});
</script>

<script lang="ts" setup>
import { useGist } from '@/composables';

const { getUserGists } = useGist();
const { data: gistList, loading } = getUserGists();
</script>

<style lang="scss" scoped>
.card--gists-panel {
  width: 100%;
  min-height: 30rem;
}

a {
  color: #24292f;
  transition: 0.5s;

  &:hover {
    color: #4078c0;
  }
}
</style>
