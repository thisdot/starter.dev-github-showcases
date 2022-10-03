<template>
  <div class="tab-navigation border-gray-200">
    <nav class="-mb-px flex" aria-label="Tabs">
      <nuxt-link
        v-for="(tab, i) in tabs"
        :key="i"
        :to="tab.path"
        class="group relative py-2 mx-2 border-b-2 border-transparent"
      >
        <div
          class="inline-flex items-center py-1 px-2 font-medium text-sm rounded-lg group-hover:bg-gray-100"
        >
          <component :is="tab.icon" class="-ml-0.5 mr-2 h-4 w-4"></component>
          <span>{{ tab.title }}</span>
          <span
            v-if="tab.label"
            class="ml-2 bg-gray-200 font-medium text-xs text-gray-800 py-0.5 px-2 rounded-xl"
          >
            {{ tab.label }}
          </span>
        </div>
      </nuxt-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ITabItem } from './types';
export default Vue.extend({
  props: {
    tabs: {
      type: Array as PropType<Array<ITabItem>>,
      default: () => [],
    },
  },
});
</script>

<style>
.tab-navigation .nuxt-link-exact-active::after {
  @apply bg-orange-500;

  position: absolute;
  content: '';
  right: 50%;
  bottom: calc(50% - 24px);
  width: 100%;
  height: 2px;
  border-radius: 6px;
  transform: translate(50%, -50%);
}
</style>
