<template>
  <div>Redirecting...</div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useUserStore } from '~/stores/userStore'

export default defineComponent({
  name: 'Redirect',
  setup() {
    const user = useUserStore()

    user.getUserToken()
  },
  auth: false,
})
</script>
