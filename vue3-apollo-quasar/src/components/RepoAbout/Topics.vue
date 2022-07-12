<template>
  <div v-if="topics" class="topicWrap">
    <span v-for="topic in topics" :key="topic" class="topic">
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
@import '../../App.css';

.topicWrap {
  margin-top: 0.25rem;
}

.topic {
  display: inline-block;
  background-color: rgba(219, 234, 254, 1);
  color: rgba(37, 99, 235, 1);
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.75rem;
  margin-right: 0.375rem;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
}

.topic:hover {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(37, 99, 235, 1);
}
</style>
