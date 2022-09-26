<template>
  <Markdown
    class="markdown-container q-py-lg q-px-xl"
    :source="markdown"
    :typographer="true"
    :linkify="true"
    :html="true"
    :highlight="{
      inline: true,
    }"
    :breaks="true"
  />
</template>
<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'MarkdownView',
});
</script>

<script lang="ts" setup>
defineProps({
  markdown: {
    type: String,
    default: '',
  },
});
</script>
<style lang="scss">
.markdown-container {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    // font-size: unset;
    font-weight: 500;
    line-height: inherit;
    letter-spacing: inherit;
  }
}
</style>
