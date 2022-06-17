<template>
<!-- py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium -->
  <span class="{{className}}"> {{ isPrivate ? 'Private' : 'Public' }} </span>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'PrivacyBadge',
});
</script>

<script lang="ts" setup>
const props = defineProps({
  isPrivate: Boolean,
  className: String,
});
</script>
