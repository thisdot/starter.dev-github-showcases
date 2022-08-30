<template>
  <div class="full-width row text-dark items-center">
    <div class="col-4 items-center flex">
      <q-icon :name="iconName" :color="iconColor" size="1.2rem"></q-icon>
      <a class="file-explorer-link" :href="href">
        {{ name }}
      </a>
    </div>
    <div class="col-4 text-grey">{{ latestCommitMessage }}</div>
    <div class="col-4 text-grey text-right">
      {{ getFriendlyDate(lastUpdated) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, computed, toRef, ref } from 'vue';
import { ExplorerContent } from './types';

export default defineComponent({
  name: 'FileExplorerNav',
});
</script>

<script lang="ts" setup>

import { useFormatter } from '@/composables';

const { getFriendlyDate } = useFormatter();

const props = defineProps({
  content: {
    type: Object as () => ExplorerContent,
    required: true,
  },
});

const content = toRef(props, 'content');

const name = ref(content.value.name);
const href = ref(content.value.to);
const latestCommitMessage = ref(content.value.latestCommitMessage);
const lastUpdated = ref(content.value.lastUpdated);

const iconName = computed(() =>
  content.value.isDirectory ? 'folder' : 'svguse:/app-icons/file.svg#file',
);

const iconColor = computed(() =>
  content.value.isDirectory ? 'info' : 'secondary',
);
</script>

<style lang="scss">
@import '@/styles/quasar.variables.scss';

.file-explorer-link {
  text-decoration: none;
  color: $dark;

  &:hover {
    text-decoration: underline;
    color: $primary;
    cursor: pointer;
  }
}
</style>
