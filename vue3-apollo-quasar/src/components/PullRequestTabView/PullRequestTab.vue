<template>
  <div class="row items-center no-wrap q-py-xs q-px-sm">
    <div class="row items-center">
      <div>
        <q-icon name="svguse:app-icons/pull-request.svg#pull-request" />
        <span>{{ openCounts }}</span>
        Open
      </div>
      <div>
        <q-icon name="svguse:app-icons/correct.svg#correct" />
        <span>{{ closedCounts }}</span>
        Closed
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineEmits, defineProps } from 'vue';
export default defineComponent({
  name: 'PullRequestTab',
});
</script>

<script lnag="ts" setup>
const TABS = {
  OPEN: 'open',
  CLOSED: 'closed',
};
const activeTab = ref(TABS.OPEN);

defineProps({
  openCounts: {
    type: Number,
    default: 0,
  },
  closedCounts: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['changeTab']);

const updateActiveTab = (tab) => {
  activeTab.value(tab);
  emit('changeTab', tab);
};
</script>
