<template>
  <span
    :class="customClass"
    class="py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium"
  >
    {{ badgetText }}
  </span>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PrivacyBadge',
  props: {
    customClass: {
      type: String,
      required: false,
      default: '',
    },
    isPrivate: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup({ isPrivate }) {
    const badgetText = ref<string>(isPrivate ? 'Private' : 'Public')

    return { badgetText }
  },
})
</script>
