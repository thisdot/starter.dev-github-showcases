<template>
  <div class="flex flex-col justify-center items-center mt-5 gap-2">
    <header class="bg-blue-600 w-3/5 p-4 text-center rounded mb-5">
      <h1 class="text-2xl font-bold text-white">Home page</h1>
    </header>
    <button @click="handleClick">LOGOUT</button>
  </div>
</template>

<script lang="ts">
import { useContext } from '@nuxtjs/composition-api'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  setup() {
    const { $auth } = useContext()

    const handleClick = async () => {
      await $auth.logout()
    }
    return { handleClick }
  },
})
</script>
