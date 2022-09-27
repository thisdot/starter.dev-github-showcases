<template>
  <q-card class="full-width q-px-sm" flat>
    <q-card-section class="row q-pb-none">
      <div class="col-auto flex">
        <h3 class="text-h6 q-my-none">
          <router-link :to="`/${repoNameWithOwnerLink}`" class="q-mr-sm">
            {{ repoNameWithOwner }}
          </router-link>
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

      <div class="text-dark q-mt-md row items-center">
        <!-- Language -->
        <div v-if="primaryLanguage" class="q-pr-md row items-baseline">
          <span
            class="circle q-mr-xs"
            :style="{ backgroundColor: primaryLanguage.color }"
          ></span>
          <span class="text-subtitle2">
            {{ primaryLanguage.name }}
          </span>
        </div>

        <!-- Star count -->
        <span v-if="stargazerCount" class="q-pr-md row items-baseline">
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
import { computed } from 'vue';
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
  owner: {
    type: Object as () => { login: string },
    required: true,
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
  isProfilePage: {
    type: Boolean,
    default: false,
  },
});

const { getFriendlyDate, upperFirst } = useFormatter();
const friendlyUpdatedAt = getFriendlyDate(props.updatedAt);

const repoNameWithOwnerLink = computed(
  () => `${props.owner?.login || ''}/${props.name || ''}`,
);
const repoNameWithOwner = computed(
  () =>
    `${!props.isProfilePage ? `${props.owner?.login || ''}/` : ''}${
      props.name || ''
    }`,
);
</script>

<style lang="scss" scoped>
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
