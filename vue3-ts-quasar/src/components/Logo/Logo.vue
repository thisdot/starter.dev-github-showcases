<template>
  <div class="q-px-sm q-py-sm">
    <router-link :to="to">
      <img :src="assetUrl" :height="size" :width="size" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const DEFAULT_LOGO_SIZE_PX = 32;
const LG_LOGO_START_SIZE_PX = 120; // From GitHub guidelines https://github.com/logos

export default defineComponent({
  name: 'Logo',
});
</script>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  to: { type: String, default: '/' },
  dark: { type: Boolean, default: true }, //? Is the logo on a dark background?
  size: { type: String, default: DEFAULT_LOGO_SIZE_PX.toString() },
});
const assetUrl = computed(() => {
  const sizePx = parseInt(props.size as string) || DEFAULT_LOGO_SIZE_PX;

  if (sizePx >= LG_LOGO_START_SIZE_PX) {
    return props.dark
      ? 'logos/gh-logo-lg-dark-bg.svg'
      : 'logos/gh-logo-lg-light-bg.svg';
  }

  //? Getting here means that logo is smaller than the large logo size - use the default logo
  return props.dark
    ? 'logos/gh-logo-dark-bg.svg'
    : 'logos/gh-logo-light-bg.svg';
});
</script>

<style scoped></style>
