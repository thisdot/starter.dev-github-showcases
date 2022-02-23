<template>
  <div
    class="window-height full-width flex column items-center justify-center overflow-hidden-y bg-dark"
  >
    <div class="column text-center q-mb-md">
      <h1 class="text-h4 text-weight-bold text-white q-mb-none">
        Welcome to starter.dev (Vue3)
      </h1>
      <h1 class="text-weight-light text-white">
        Please sign in with your GitHub account to proceed
      </h1>
    </div>
    <q-btn class="btn-cta" outline color="white"> Sign in with GitHub</q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthPage',
});
</script>
