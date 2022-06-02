<template>
  <div>Redirecting...</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Redirect',
  auth: 'guest',
  setup() {
    const { $auth, redirect } = useContext()

    onMounted(async () => {
      try {
        /**
         * Fetching on client side to avoid nuxt/auth headers error
         * For reference see: https://github.com/nuxt-community/auth-module/discussions/1510
         */
        await $auth.loginWith('customLogin')
        redirect('/')
      } catch (error) {
        redirect('/sign-in')
      }
    })
  },
})
</script>
