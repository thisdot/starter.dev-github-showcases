<template>
  <div class="markdown-container q-py-lg q-px-xl" v-html="markdownToHTML" />
</template>
<script lang="ts">
import { defineComponent, defineProps, computed } from 'vue';
import { marked } from 'marked';

export default defineComponent({
  name: 'MarkdownView',
});
</script>

<script lang="ts" setup>
const props = defineProps({
  markdown: {
    type: String,
    default: '',
  },
});

const markdownToHTML = computed(() => marked(props.markdown));
</script>
<style lang="scss">
.markdown-container {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    letter-spacing: inherit;
  }
}
</style>
