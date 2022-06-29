<template>
  <div class="container--empty">
    <section class="text-center header-content">
      <slot name="header"></slot>
    </section>

    <section v-if="imageUrl.length" class="d-flex mx-auto mb-4">
      <img :src="imageUrl" :alt="alt" :style="`opacity: ${opacity}`" />
    </section>

    <section class="text-center body-content"><slot></slot></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmptyContainer',
  props: {
    imageUrl: {
      type: String,
      default: '/logos/gh-logo-lg-light-bg.svg', // Default svg we use for missing data
    },
    opacity: {
      type: String,
      default: '1.0',
    },
    alt: {
      type: String,
      default: 'Not found',
    },
  },
});
</script>

<style scoped>
.body-content,
.header-content h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.25;
  margin-bottom: 8px !important;
}

img {
  width: 100%;
  max-height: 15rem;
  max-width: 20rem;
  align-self: center;
}

.container--empty {
  min-height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
