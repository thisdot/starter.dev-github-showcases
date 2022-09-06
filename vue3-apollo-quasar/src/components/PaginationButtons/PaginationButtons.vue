<template>
  <div class="row justify-center items-center q-my-md">
    <q-pagination
      v-model="current"
      :max="10"
      :max-pages="6"
      direction-links
      flat
      color="grey-4"
      active-color="primary"
      boundary-numbers
      @update:model-value="paginate"
      class="pagination"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineEmits, ref } from 'vue';
export default defineComponent({
  name: 'PaginationButtons',
});
</script>

<script lang="ts" setup>
import { PAGINATION_EVENT } from './data';

const current = ref(1);
const emit = defineEmits([PAGINATION_EVENT]);

const paginate = (value) => emit(PAGINATION_EVENT, value);
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
