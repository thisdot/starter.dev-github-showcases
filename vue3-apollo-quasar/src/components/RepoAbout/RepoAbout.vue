<template>
  <div class="wrapper">
    <div class="container">
      <h3 class="heading">About</h3>
      <div class="description">
        <div>
          <Description :description="description" />
          <HomepageUrl :homepageUrl="homepageUrl" />
          <Topics :topics="topics" />
        </div>
      </div>
      <div>
        <a class="readmeLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="readmeIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Readme
        </a>
      </div>
      <q-separator class="q-mt-lg"></q-separator>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
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
.wrapper {
  grid-column: span 12 / span 12;

  @media (min-width: 768px) {
    grid-column: span 5 / span 5;
  }
  @media (min-width: 1280px) {
    grid-column: span 3 / span 3;
  }
}

.container {
  padding-bottom: 2rem;
  border-bottom-width: 2px;
  border-color: rgba(209, 213, 219, 1);
  margin-top: 1.25rem;
}

.heading {
  color: rgba(55, 65, 81, 1);
  font-weight: 600;
  font-size: 1rem;
}

.description {
  color: rgba(75, 85, 99, 1);
}

.readmeLink {
  display: flex;
  align-items: center;
  color: rgba(107, 114, 128, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  line-height: 1.375;
  margin-top: 0.5rem;
}

.readmeLink:hover {
  color: rgba(59, 130, 246, 1);
}

.readmeIcon {
  height: 1.25rem;
  width: 1.25rem;
  margin-top: 0.125rem;
  margin-right: 0.5rem;
  margin-bottom: 0.125rem;
}
</style>
