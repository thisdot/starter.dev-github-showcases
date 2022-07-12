<template>
  <div v-if="topics" class="wrapper">
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
.wrapper {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.topic {
  //   display: inline-block;
  background-color: rgb(221, 244, 255);
  color: rgb(9, 105, 218);
  margin: 0 0.375rem 0.333em 0;
  cursor: pointer;
  display: inline-block;
  padding: 0 7px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 2rem;
  padding: 0 0.625rem 0 0.625rem;
  padding-right: 10px;
  padding-left: 10px;
  line-height: 1.375rem;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.topic:hover {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(37, 99, 235, 1);
}
</style>
