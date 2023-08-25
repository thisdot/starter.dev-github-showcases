<template>
  <div
    v-if="isFiltered"
    class="row items-center text-caption q-my-sm q-ml-2 cursor-pointer clear_wrapper"
    @click="resetFilter"
  >
    <span class="q-mr-sm close_icon row just0fy-center items-center">
      <q-icon name="close" size="xs" />
    </span>
    Clear filter
  </div>
</template>

<script lang="ts" setup>
import { useRepoStore } from '@/store/respoStore';
import { computed } from 'vue';

const resetFilter = () => repoStore.resetFilter();
const isFiltered = computed(
  () =>
    repoStore.selectedLabel || repoStore.selectedMilestone || repoStore.sortBy,
);
const repoStore = useRepoStore();
</script>

<style lang="scss" scoped>
.clear_wrapper {
  &:hover {
    .close_icon {
      background-color: rgb(46, 94, 190);
    }
  }
}
.close_icon {
  background-color: rgb(107 114 128);
  color: white;
  border-radius: 0.375rem;
}
</style>
