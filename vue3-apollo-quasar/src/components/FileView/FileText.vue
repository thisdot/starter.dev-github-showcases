<template>
  <table>
    <tr v-for="(text, i) in texts" :key="i">
      <slot name="text" :text="text" :index="i"></slot>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
export default defineComponent({
  name: 'FileText',
});
</script>

<script lang="ts" setup>
defineProps({
  texts: {
    type: Array,
    default: () => [],
  },
});
</script>
