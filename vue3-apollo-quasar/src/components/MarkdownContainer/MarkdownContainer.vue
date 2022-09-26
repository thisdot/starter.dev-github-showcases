<template>
  <div v-if="!loading" class="readme-container q-my-md">
    <div class="header q-py-md q-px-md">
      <span class="readme-icon-container q-mr-sm q-px-xs q-py-xs">
        <q-icon
          class="custom-icon text-h6"
          name="svguse:/app-icons/readme-list-icon.svg#readme-list-icon"
        ></q-icon>
      </span>
      <span class="text-caption text-weight-medium title">README.md</span>
    </div>
    <MarkdownView :markdown="readme" />
  </div>
</template>
<script lang="ts">
import { defineComponent, defineProps } from 'vue';
import { useRepoReadMe } from '@/composables';

export default defineComponent({
  name: 'MarkdownContainer',
});
</script>

<script lang="ts" setup>
import MarkdownView from './MarkdownView.vue';
const { getRepoReadMe } = useRepoReadMe();

const props = defineProps({
  readmePath: {
    type: String,
    default: '',
  },
  repo: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});
const { readme, loading } = getRepoReadMe({
  owner: props.owner,
  name: props.repo,
  branch: props.branch,
  path: props.readmePath,
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.readme-container {
  border-radius: 0.375rem;
  border: 1px solid $secondary-100;
  overflow: hidden;
}
.header {
  z-index: 30;
  border-bottom: 1px solid $secondary-100;
  background-color: $white;

  .title {
    line-height: 1.25rem;
  }

  .readme-icon-container {
    border-radius: 0.25rem;
    &:hover {
      background-color: $secondary-100;
    }
  }
}
</style>
