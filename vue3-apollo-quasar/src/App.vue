<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="user.isLoggedIn">
      <NavHeader />
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<script lang="ts" setup>
//* Components
import { NavHeader } from '@/components';
import { useUserStore } from '@/store/userStore';

const user = useUserStore();
</script>
<style>
@import './App.css';

/* For the code content view */
[dir] .hljs {
  background: white !important;
}
</style>
