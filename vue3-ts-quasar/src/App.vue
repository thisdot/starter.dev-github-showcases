<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <NavHeader />
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

//* Components
import { NavHeader } from '@/components';

export default defineComponent({
  name: 'App',
  components: { NavHeader },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
@import './App.css';
</style>
