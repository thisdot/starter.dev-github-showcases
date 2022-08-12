<template>
  <div class="text-body1 text-italic q-mb-md">
    <span v-if="description">{{ description }}</span>
    <span v-else>No description, website, or topics provided.</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Description',
  props: {
    description: String,
  },
});
</script>
