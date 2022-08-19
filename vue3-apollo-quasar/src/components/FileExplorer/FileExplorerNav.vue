<template>
  <div class="full-width row text-dark items-center">
    <div class="col-4 items-center flex">
      <q-icon :name="iconName" :color="iconColor" size="1.2rem"></q-icon>
      <a class="file-explorer-link" :href="$router.resolve(content.to).href">
        {{ content.name }}
      </a>
    </div>
    <div class="col-4 text-grey">{{ content.latestCommitMessage }}</div>
    <div class="col-4 text-grey text-right">
      {{ getFriendlyDate(content.lastUpdated) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileExplorerNav',
});
</script>

<script lang="ts" setup>
export type ExplorerContent = {
  isDirectory: boolean;
  name: string;
  latestCommitMessage: string;
  lastUpdated: string;
  to?: string;
};

import { defineProps, computed } from 'vue';
import { useFormatter } from '@/composables';

const { getFriendlyDate } = useFormatter();

const props = defineProps({
  content: {
    type: Object as () => ExplorerContent,
    required: true,
  },
});

const content = computed(() => props.content);

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
