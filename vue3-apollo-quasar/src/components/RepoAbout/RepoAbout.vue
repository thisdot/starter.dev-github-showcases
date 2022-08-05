<template>
  <div class="wrapper">
    <div class="container q-mt-lg q-pb-lg">
      <h3 class="heading text-subtitle1 text-weight-bold">About</h3>
      <div class="description">
        <div>
          <Description :description="description" />
          <HomepageUrl :homepageUrl="homepageUrl" />
          <Topics :topics="topics" />
        </div>
      </div>
      <div>
        <a
          href="#"
          class="readmeLink row items-center text-body2 q-mt-sm cursor-pointer inline no-wrap"
        >
          <q-icon
            name="svguse:app-icons/read-me.svg#read-me"
            class="text-body1 q-mr-sm"
          />
          Readme
        </a>
      </div>
      <q-separator class="q-mt-lg"></q-separator>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Description from './Description.vue';
import HomepageUrl from './HomepageUrl.vue';
import Topics from './Topics.vue';

export default defineComponent({
  name: 'RepoAbout',
  props: {
    description: {
      type: String,
      value: 'A mock collection of GitHub clone implementations.',
    },
    homepageUrl: {
      type: String,
      value: 'https://github.com/thisdot/starter.dev-github-showcases',
    },
    topics: {
      type: Array,
      value: ['github', 'angular', 'apollo-client', 'tailwindcss'],
    },
  },
  components: {
    Description,
    HomepageUrl,
    Topics,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.heading {
  color: $dark;
}

.description {
  color: $secondary-200;
}

.readmeLink {
  color: $secondary;
  text-decoration: none;
  &:hover {
    color: $primary;
  }
}
</style>
