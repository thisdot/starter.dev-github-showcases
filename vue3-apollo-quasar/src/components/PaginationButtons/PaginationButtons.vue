<template>
  <div class="row justify-center items-center q-my-md">
    <q-btn
      flat
      no-caps
      align="around"
      class="btn-fixed-width text-caption pagination_btn"
      :disabled="!isPrevActive"
    >
      <q-icon class="fa fa-chevron-left q-mr-xs" />
      <span>Prev</span>
    </q-btn>
    <q-btn
      flat
      no-caps
      align="around"
      class="btn-fixed-width text-caption pagination_btn"
      :disabled="!isNextActive"
    >
      <span>Next</span>
      <q-icon class="fa fa-chevron-right q-ml-xs" />
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
export default defineComponent({
  name: 'PaginationButtons',
});
</script>

<script lang="ts" setup>
defineProps({
  isPrevActive: {
    type: Boolean,
    required: true,
  },
  isNextActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.pagination_btn {
  cursor: pointer;
  color: $primary;
  &:disabled {
    color: $secondary-200;
  }

  .q-icon {
    font-size: 0.6rem;
  }
}
</style>
