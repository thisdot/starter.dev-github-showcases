<template>
  <section class="h-screen w-full flex items-center justify-center bg-black">
    <form method="post" @submit="handleSignIn">
      <button
        type="submit"
        class="border-2 border-zinc-700 text-zinc-100 px-20 py-2 rounded-md hover:bg-zinc-100 hover:border-zinc-100 hover:text-zinc-900 transition-all"
      >
        Sign in with GitHub
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { useContext, defineComponent } from '@nuxtjs/composition-api'
import { SIGN_IN_URL } from '~/constants/url.constants'

export default defineComponent({
  name: 'SignIn',
  setup() {
    const {
      $config: { API_URL, BASE_URL },
    } = useContext()

    const handleSignIn = (event: Event): void => {
      event.preventDefault()
      window.location.href = SIGN_IN_URL(API_URL, BASE_URL)
    }

    return { handleSignIn }
  },
  head: {
    titleTemplate: '%s - Sign-in',
  },
  auth: false,
})
</script>
