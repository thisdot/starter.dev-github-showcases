<template>
  <q-list separator>
    <q-item
      v-for="content in contentList"
      :key="itemKey(content.name, content.isDirectory)"
    >
      <FileExplorerNav :content="content" />
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
import { ExplorerContent } from './types';

export default defineComponent({
  name: 'FileExplorer',
});
</script>

<script lang="ts" setup>
import FileExplorerNav from './FileExplorerNav.vue';

defineProps({
  contentList: {
    type: Object as () => ExplorerContent[],
    required: true,
  },
});

const directoryCheck = (value: boolean): string => (value ? 'dir' : 'file');
const itemKey = (name: string, isDirectory: boolean): string =>
  `${name}-${directoryCheck(isDirectory)}`;
</script>
