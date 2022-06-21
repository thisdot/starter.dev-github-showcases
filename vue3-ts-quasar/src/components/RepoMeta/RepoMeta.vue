<template>
  <div class="metadata">
    <div v-if="language">
      <span style="{{backgroundColor: color}}" class="languageColor" />
      {{ language }}
    </div>
    <div v-if="stargazerCount > 0 || forkCount > 0" class="space-x-4">
      <span v-if="stargazerCount > 0" class="socialCount">
        <q-icon class="socialIcon" name="far fa-star"></q-icon
        >{{ stargazerCount }}
      </span>
      <span v-if="forkCount > 0" class="socialCount">
        <q-icon class="socialIcon" name="fas fa-code-branch"></q-icon>
        {{ forkCount }}
      </span>
    </div>
    <div>
      Updated{' '}
      {{ formatDistance(new Date(updatedAt), Date.now(), { addSuffix: true }) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'RepoMeta',
});
</script>

<script lang="ts" setup>
import { formatDistance } from 'date-fns';

const props = defineProps({
  language: String,
  languageColor: String,
  stargazerCount: String,
  forkCount: String,
  updatedAt: String,
});

const color = props.languageColor || '#ccc';
</script>

<style>
.metadata {
  display: flex;
  margin-top: 1rem;
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  color: rgb(75 85 99 / 1);
  margin-right: calc(1rem * 0);
  margin-left: calc(1rem * calc(1 - 0));
}

.languageColor {
  display: inline-block;
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  margin-right: 0.25rem;
  top: 0.125rem;
}

.hover:socialcount {
  cursor: pointer;
  color: rgb(37 99 235 / 1);
}

.socialIcon {
  display: inline;
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.125rem;
}
</style>
