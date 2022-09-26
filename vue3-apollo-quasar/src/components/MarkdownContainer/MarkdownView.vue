<template>
  <Markdown
    class="markdown-container q-py-lg q-px-xl q-mx-auto"
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
@import '@/styles/quasar.variables.scss';
.markdown-container {
  font-size: 1rem;
  max-width: 1012px;
  line-height: 1.5;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: inherit;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
  h1 {
    font-size: 2rem;
    margin-top: 0 !important;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h1,
  h2 {
    border-bottom: 1px solid $secondary-100;
    padding-bottom: 0.3em;
  }

  table {
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
    margin-top: 0;
    margin-bottom: 16px;
    border-spacing: 0;
    border-collapse: collapse;

    tr {
      background-color: $white;
      border-top: 1px solid $secondary-100;
      td,
      th {
        padding: 6px 13px;
        border: 1px solid $secondary-100;
      }
      &:nth-child(2n) {
        background-color: $primary-100;
      }
    }
  }
  a {
    color: $primary;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  pre {
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: $primary-100;
    border-radius: 6px;
    user-select: all;
    code {
      background: transparent;
    }
  }
  ul,
  ol {
    padding-left: 2rem;
  }
  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }
  li + li {
    margin-top: 0.25em;
  }
  li {
    font-weight: 400;
  }
}
</style>
