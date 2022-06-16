<template>
  <div>
    <TheNavBar />
    <div
      class="w-full min-h-[calc(100vh-70px)] flex flex-col-reverse lg:flex-row bg-gray-100"
    >
      <aside class="w-full lg:w-96 bg-white p-8">
        <UserGists />
      </aside>
      <main class="max-w-screen-lg w-full">
        <div class="p-12">
          <h2 class="text-lg font-medium mb-4">Top Repositories</h2>
          <UserRepos />
        </div>
      </main>
    </div>
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
