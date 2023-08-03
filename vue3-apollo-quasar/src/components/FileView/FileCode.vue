<template>
  <table cellpadding="0" cellspacing="0">
    <tr class="code" v-for="(code, i) in codes" :key="i">
      <slot name="code" :code="code" :index="i"></slot>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
export default defineComponent({
  name: 'FileCode',
});
</script>

<script lang="ts" setup>
defineProps({
  codes: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.code {
  line-height: 0;
}
</style>
