<template>
  <div
    v-if="homepageUrl"
    class="full-width ellipsis overflow-hidden row items-center text-no-wrap no-wrap"
  >
    <q-icon
      name="svguse:app-icons/link.svg#link-icon"
      class="linkIcon text-subtitle1 q-mr-sm"
    />
    <a
      href="{{homepageUrl}}"
      class="link text-subtitle1 text-weight-bold"
      target="_blank"
    >
      <span>{{ homepageUrl }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomepageUrl',
  props: {
    homepageUrl: String,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.linkIcon {
  color: $secondary;
}

a.link {
  color: $primary;
  &:hover {
    text-decoration: underline;
  }
}
</style>
