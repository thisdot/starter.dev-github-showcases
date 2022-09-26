<template>
  <div class="full-width wrapper text-caption">
    <div class="file-header q-px-xs q-py-md">
      <span class="q-px-xs">{{ fileContent.length }} lines</span>
      <span class="file-header-size q-px-xs">{{ fileSize }}</span>
    </div>
    <div class="code-wrapper q-px-sm q-py-sm">
      <FileCode v-if="language && fileContent" :codes="fileContent">
        <template #code="{ code, index }">
          <td class="line-number">{{ index + 1 }}</td>
          <td>
            <highlightjs :code="code" />
          </td>
        </template>
      </FileCode>
      <FileText v-else-if="!language && fileContent" :texts="fileContent">
        <template #text="{ text, index }">
          <td class="line-number">{{ index + 1 }}</td>
          <td class="text-weight-regular">
            {{ text }}
          </td>
        </template>
      </FileText>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, computed } from 'vue';
import { getLanguage } from './getLanguage';
import formatBytes from '@/helpers/formatByte';

export default defineComponent({
  name: 'FileView',
});
</script>

<script lang="ts" setup>
import FileCode from './FileCode.vue';
import FileText from './FileText.vue';

const props = defineProps({
  path: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  fileSize: {
    type: Number,
    default: 0,
  },
});

const language = computed(() => {
  const extension = props.path.split('.').pop();
  const language = getLanguage(extension);
  return language;
});

const fileContent = computed((): string[] => props.text?.trim().split('\n'));

const fileSize = computed((): string => formatBytes(props.fileSize));
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';

.wrapper {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
}
.file-header {
  background-color: $primary-100;
  border-bottom: 1px solid $secondary-100;
  line-height: 1rem;
  color: $secondary;
}
.line-number {
  display: table-cell;
  text-align: right;
  padding-right: 1rem;
  user-select: none;
  color: $secondary-200;
}

.file-header-size {
  border-left: 1px solid $secondary-100;
}

pre {
  margin: 0;
  border-spacing: 5px;
  text-align: left;
  overflow: auto;
}
</style>
