<template>
  <div class="row text-dark">
    <div class="col-4 items-center flex">
      <q-icon :name="iconName" :color="iconColor" size="1.2rem"></q-icon>
      <router-link class="file-explorer-link" :to="props.to">
        {{ props.name }}
      </router-link>
    </div>
    <div class="col-4 text-grey">{{ props.latestCommitMessage }}</div>
    <div class="col-4 text-grey text-right">
      {{ getFriendlyDate(props.lastUpdated) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileExplorerNav',
});
</script>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { useFormatter } from '@/composables';

const { getFriendlyDate } = useFormatter();

const props = defineProps({
  isDirectory: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  latestCommitMessage: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: '#!',
  },
});

const iconName = computed(() =>
  props.isDirectory ? 'folder' : 'svguse:app-icons/file.svg#file',
);

const iconColor = computed(() => (props.isDirectory ? 'info' : 'secondary'));
</script>

<style lang="scss">
@import '@/styles/quasar.variables.scss';

.file-explorer-link {
  &:hover {
    text-decoration: underline;
    color: $primary;
    cursor: pointer;
  }
}
</style>
