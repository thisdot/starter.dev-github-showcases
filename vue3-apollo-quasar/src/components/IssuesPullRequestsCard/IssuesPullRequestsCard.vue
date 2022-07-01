<template>
  <q-card></q-card>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'IssuesPullRequestCard',
})
</script>


<script lang="ts" setup>
const cardTypes = ['issue', 'pullrequest'];

defineProps({
  type: {
    type: String,
    validator: (prop: string) => cardTypes.includes(prop),
    required: true,
    default: 'issue',
  },
  status: {
    type: String,
    required: true,
    default: 'open',
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  }
});
</script>

<style lang="scss" scoped>

</style>