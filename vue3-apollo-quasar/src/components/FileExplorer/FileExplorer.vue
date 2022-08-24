<template>
  <q-list separator>
    <q-item
      v-for="content in contentList"
      :key="ItemKey(content.name, content.isDirectory)"
    >
      <FileExplorerNav :content="content" />
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileExplorer',
});
</script>

<script lang="ts" setup>
import { defineProps } from 'vue';
import FileExplorerNav, { ExplorerContent } from './FileExplorerNav.vue';

defineProps({
  contentList: {
    type: Object as () => ExplorerContent[],
    required: true,
  },
});

const directoryCheck = (value: boolean): string => (value ? 'dir' : 'file');
const ItemKey = (name: string, isDirectory: boolean): string =>
  `${name}-${directoryCheck(isDirectory)}`;
</script>
