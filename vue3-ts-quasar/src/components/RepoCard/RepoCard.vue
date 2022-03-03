<template>
  <q-card class="full-width q-px-sm" flat>
    <q-card-section class="row q-pb-none">
      <div class="col-auto flex">
        <h3 class="text-h6 q-my-none">
          <!-- TODO: Add redirect to specific repo details page -->
          <a href="#!" class="q-mr-sm">
            {{ name }}
          </a>
          <q-chip
            class="text-caption text-weight-bold text-secondary q-pa-sm"
            outline
          >
            {{ upperFirst(visibility) }}
          </q-chip>
        </h3>
      </div>
      <q-space></q-space>
      <div class="col-3 text-right">
        <button class="git-btn btn btn-sm">
          <q-icon name="far fa-star"></q-icon>
          <span class="q-ml-xs">Star</span>
        </button>
      </div>
    </q-card-section>

    <q-card-section>
      <!-- Description -->
      <p v-if="description" class="ellipsis-2-lines">
        {{ description }}
      </p>

      <div class="text-dark q-mt-md row">
        <!-- Language -->
        <div v-if="primaryLanguage" class="q-pr-md">
          <span
            class="circle q-mr-xs"
            :style="{ backgroundColor: primaryLanguage.color }"
          ></span>
          <span class="text-subtitle2">
            {{ primaryLanguage.name }}
          </span>
        </div>

        <!-- Star count -->
        <span v-if="stargazerCount" class="q-pr-md">
          <q-icon name="far fa-star" class="q-mr-xs"></q-icon>
          <span>
            {{ stargazerCount?.toLocaleString() }}
          </span>
        </span>

        <!-- Last update date -->
        <span class="text-subtitle">
          Updated
          {{ friendlyUpdatedAt }}
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'RepoCard',
});
</script>

<script lang="ts" setup>
import { useFormatter } from '@/composables';

const props = defineProps({
  name: {
    type: String,
    default: '',
    required: true,
  },
  visibility: {
    type: String,
    default: 'Public',
    required: true,
  },
  description: {
    type: String,
    default: '',
    required: false,
  },
  primaryLanguage: {
    type: [Object, null],
    required: true,
  },
  stargazerCount: {
    type: Number,
    default: 0,
    required: false,
  },
  forkCount: {
    type: Number,
    default: 0,
    required: false,
  },
  updatedAt: {
    type: String,
    required: false,
  },
});

const { getFriendlyDate, upperFirst } = useFormatter();
const friendlyUpdatedAt = getFriendlyDate(props.updatedAt);
</script>

<style lang="scss">
@import '../../styles/quasar.variables.scss';

a {
  text-decoration: none;
  color: $primary !important;
  transition: 0.5s;

  &:hover {
    text-decoration: underline;
  }
}

$circleWidth: 0.75rem;

.circle {
  display: inline-block;
  border-radius: 100%;
  height: $circleWidth;
  width: $circleWidth;
}
</style>
