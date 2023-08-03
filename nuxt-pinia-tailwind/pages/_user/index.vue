<template>
  <div class="relative pt-8">
    <div
      class="border-b border-gray-200 sticky top-0 bg-white z-20 hidden md:block"
    >
      <div class="grid grid-cols-12 gap-8 max-w-screen-2xl mx-auto">
        <div class="col-span-12 md:col-span-4 xl:col-span-3"></div>
        <div class="col-span-12 md:col-span-8 xl:col-span-9">
          <ProfileNav></ProfileNav>
        </div>
      </div>
    </div>
    <div class="max-w-screen-2xl mx-auto py-8 px-4">
      <div class="grid grid-cols-12 gap-8">
        <div
          class="col-span-12 md:col-span-4 xl:col-span-3 relative md:-top-20"
        >
          <UserProfile></UserProfile>
        </div>
        <div class="col-span-12 md:col-span-8 xl:col-span-9">
          {{ $route.fullPath }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  layout: 'LoggedIn',
});
</script>
