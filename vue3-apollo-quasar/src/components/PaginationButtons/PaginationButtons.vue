<template>
  <div class="row justify-center items-center q-my-md">
    <button
      class="row justify-center items-center btn-fixed-width text-caption pagination_btn text-capitalize bg-transparent no-border prev_btn"
      :disabled="!isPrevActive"
      @click="prev()"
    >
      <q-icon class="fa fa-chevron-left q-mr-xs" />
      <span>{{ PAGINATIONS.PREV }}</span>
    </button>
    <button
      class="row justify-center items-center btn-fixed-width text-caption pagination_btn text-capitalize bg-transparent no-border next_btn"
      :disabled="!isNextActive"
      @click="next()"
    >
      <span>{{ PAGINATIONS.NEXT }}</span>
      <q-icon class="fa fa-chevron-right q-ml-xs" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, defineEmits } from 'vue';
export default defineComponent({
  name: 'PaginationButtons',
});
</script>

<script lang="ts" setup>
import { PAGINATION_EVENT, PAGINATIONS } from './data';

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
const emit = defineEmits([PAGINATION_EVENT]);

const prev = () => emit(PAGINATION_EVENT, PAGINATIONS.PREV);
const next = () => emit(PAGINATION_EVENT, PAGINATIONS.NEXT);
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
