<template>
  <div
    class="window-height full-width flex column items-center justify-center overflow-hidden-y bg-dark"
  >
    <div class="column text-center q-mb-md">
      <h1 class="text-h4 text-weight-bold text-white q-mb-none">
        Welcome to starter.dev (Vue3)
      </h1>
      <h3 class="text-h6 text-weight-light text-white">
        Please sign in with your GitHub account to proceed
      </h3>
    </div>
    <q-btn class="btn-cta" outline color="white" @click="login">
      Sign in with GitHub</q-btn
    >
  </div>
  <div class="fixed-bottom flex justify-center q-pb-md text-white">
    <a target="_blank" href="https://www.netlify.com">
      <img
        src="https://www.netlify.com/v3/img/components/netlify-light.svg"
        alt="Deploys by Netlify"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthPage',
});
</script>

<script lang="ts" setup>
// Composables
import { useAuth } from '@/composables';

const { login } = useAuth();
</script>

<style>
.btn-cta {
  min-width: 20rem;
  height: 4rem !important;
}
</style>
