<template>
  <div class="wrapper">
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

<style lang="scss" scoped>
.wrapper {
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 1rem;
}
</style>
