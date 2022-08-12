<template>
  <div v-if="topics" class="q-my-lg row items-center">
    <span
      v-for="topic in topics"
      :key="topic"
      class="topic q-mb-xs q-mr-xs q-px-md q-py-xs text-caption text-no-wrap text-weight-medium cursor-pointer"
    >
      {{ topic }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Topics',
  props: {
    topics: Array,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.topic {
  background-color: $primary-200;
  color: $primary;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: $primary;
  }
}
</style>
