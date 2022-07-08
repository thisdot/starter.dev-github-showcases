<template>
  <q-item v-bind="$attrs" class="q-py-xs q-pl-md" :class="className">
    <q-item-section
      class="row justify-start items-center no-wrap"
      style="flex-direction: row; justify-content: start"
    >
      <span class="q-mr-md">
        <slot name="icon"></slot>
      </span>
      <slot />
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListItem',
  props: {
    className: String,
  },
});
</script>
