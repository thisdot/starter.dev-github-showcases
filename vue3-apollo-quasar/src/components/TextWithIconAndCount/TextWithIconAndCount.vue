<template>
  <span class="row justify-around items-center q-pa-xs">
    <slot name="icon" />
    <slot name="title" />
    <slot name="count" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TextWithIconAndCount',
});
</script>
