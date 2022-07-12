<template>
  <div v-if="homepageUrl" class="linkContainer">
    <!-- <LinkIcon class="linkIcon" /> -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="linkIcon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
    <a href="{{homepageUrl}}" class="link" target="_blank">
      {{ homepageUrl }}
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
@import '../../App.css';

.linkContainer {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.linkIcon {
  display: inline;
  width: 1rem;
  height: 1rem;
  color: rgba(55, 65, 81, 1);
  margin-right: 0.5rem;
  margin-top: -0.125rem;
}

.link {
  font-weight: 600;
  color: rgba(37, 99, 235, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.link:hover {
  text-decoration: underline;
}
</style>
