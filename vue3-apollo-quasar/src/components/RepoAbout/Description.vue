<template>
  <span v-if="text">{{ text }}</span>
  <span v-else class="italic"
    >No description, website, or topics provided.</span
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Description',
  props: {
    text: String,
  },
});
</script>
