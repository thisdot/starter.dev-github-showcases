<template>
  <div class="row items-center no-wrap q-py-xs q-px-sm">
    <div class="row items-center">
      <div>
        <q-icon>
          <PullRequestsIcon />
        </q-icon>
        <span>{{ openCounts }}</span>
        Open
      </div>
      <div>
        <q-icon>
          <CorrectIcon />
        </q-icon>
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
import { PullRequestsIcon, CorrectIcon } from '@/components';
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
