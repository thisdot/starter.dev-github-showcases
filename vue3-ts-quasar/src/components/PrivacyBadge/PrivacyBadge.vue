<template>
  <span class="badge"> {{ isPrivate ? 'Private' : 'Public' }} </span>
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

<style>
.badge {
  position: relative;
  bottom: 0.125rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 0.75rem;
  color: rgb(75 85 99 / 1);
  border-width: 1px;
  border-color: rgb(209 213 219 / 1);
  font-weight: 500;
}
</style>
