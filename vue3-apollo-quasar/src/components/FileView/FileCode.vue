<template>
  <div class="code">
    <slot name="code"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FileCode',
});
</script>
