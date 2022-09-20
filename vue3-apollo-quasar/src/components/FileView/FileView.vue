<template>
  <div class="full-width">
    <div class="file-header">
      <span class="file-header-lines">{{ lines.length }} lines</span>
      <span class="file-header-size">{{ fileSize }} Bytes</span>
    </div>
    <FileCode v-if="language" :lines="lines">
      <template #code>
        <highlightjs :language="language" :code="text">
          <template>
            <div class="lines">
              <span v-for="(line, i) in lines" :key="i">{{ line }}</span>
            </div>
          </template>
        </highlightjs>
      </template>
    </FileCode>
    <pre v-else>
      {{ text }}
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, computed } from 'vue';
import { getLanguage } from './getLanguage';

export default defineComponent({
  name: 'FileView',
});
</script>

<script lang="ts" setup>
import FileCode from './FileCode.vue';

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

const lines = computed(() => {
  const linesCount = props.text.split('\n').length;
  const lines = Array.from(Array(linesCount).keys()).map((i) => i + 1);
  return lines;
});
</script>

<style lang="scss" scoped>
.file-header {
  padding: 0.75rem 0.5rem;
  background-color: rgb(243 244 246);
  border-bottom: 1px solid rgb(209 213 219);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(31 41 55);
}
.line-number {
  display: table-cell;
  text-align: right;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  padding-right: 1rem;
  user-select: none;
  color: rgb(107 114 128);
}

.file-header-size {
  padding: 0 0.5rem;
  border-left: 1px solid rgb(209 213 219);
}

.file-header-lines {
  padding: 0 0.5rem;
}
div > pre {
  margin: 0;
  border-spacing: 5px;
  text-align: left;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  // font-size: 0.75rem;
  line-height: 1rem;
  overflow: auto;
}
pre * {
  background: #fff !important;
}
</style>
