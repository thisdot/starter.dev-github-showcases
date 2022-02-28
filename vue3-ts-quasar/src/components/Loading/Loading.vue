<template>
  <div class="window-height full-width flex column items-center justify-center">
    <slot name="top"></slot>

    <q-circular-progress
      v-if="true"
      reverse
      indeterminate
      size="4rem"
      :thickness="0.2"
      color="primary"
      track-color="secondary"
      class="q-mx-md z-max"
    />

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loading',
});
</script>
