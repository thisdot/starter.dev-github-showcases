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
      <q-list v-for="gist in gistList" :key="gist.id">
        <q-item class="ellipsis">
          <a :href="gist.html_url" target="__blank">{{ gist.description }}</a>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GistsPanel',
});
</script>

<script lang="ts" setup>
//* Types
import { Gist } from '../../types';

const searchText = ref('');

// TODO: Fetch 👇🏾these from the API
const gistList: Gist[] = [
  {
    id: '123435325',
    html_url: '#',
    description: 'Staring Octocat',
    files: {
      test: {
        filename: 'test-gist.txt',
        language: 'Text',
        raw_url: '#',
        type: 'text/text',
        size: 500,
      },
    },
    public: true,
  },
  {
    id: '123435325',
    html_url: '#',
    description: 'Laughing Octocat',
    files: {
      test: {
        filename: 'test-gist.txt',
        language: 'Text',
        raw_url: '#',
        type: 'text/text',
        size: 500,
      },
    },
    public: true,
  },
  {
    id: '123435325',
    html_url: '#',
    description: 'Talking Octocat',
    files: {
      test: {
        filename: 'test-gist.txt',
        language: 'Text',
        raw_url: '#',
        type: 'text/text',
        size: 500,
      },
    },
    public: true,
  },
  {
    id: '123435325',
    html_url: '#',
    description: 'Crying Octocat',
    files: {
      test: {
        filename: 'test-gist.txt',
        language: 'Text',
        raw_url: '#',
        type: 'text/text',
        size: 500,
      },
    },
    public: true,
  },
];
</script>

<style lang="scss" src="./gists-panel.scss" scoped></style>
