<template>
  <div class="flex flex-col justify-center items-center mt-5 gap-2">
    <header class="bg-blue-600 w-3/5 p-4 text-center rounded mb-5">
      <h1 class="text-2xl font-bold text-white">Home page</h1>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  auth: true,
})
</script>
