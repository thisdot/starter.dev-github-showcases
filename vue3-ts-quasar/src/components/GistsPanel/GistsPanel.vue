<template>
  <q-card class="card--gists-panel full-height" flat square>
    <q-card-section>
      <h6 class="text-weight-bold text-dark q-mb-sm">Gists</h6>
      <q-input
        v-model="searchText"
        type="search"
        standout
        dense
        placeholder="Find a gist..."
      />
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <q-list v-for="gist in gistData" :key="gist.id">
        <q-item class="ellipsis">
          <a :href="gist.url" target="__blank">{{ gist.name }}</a>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'GistsPanel',
});
</script>

<script lang="ts" setup>
import { useGists } from '@/composables';

const searchText = ref('');

const { getUserGists } = useGists();
// let gistData, gistLoading;

const { data: gistData, loading: gistLoading } = getUserGists();
console.log(gistData);
// watch(getUserGists(), (data, loading) => {
//   gistData = data;
//   gistLoading = loading;
//   console.log(gistData);
// });
// watch(gistData, value) => {
//   return value;
// }

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
