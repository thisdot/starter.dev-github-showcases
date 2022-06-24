<template>
  <div class="subheader q-pa-sm">
    <div class="container">
      <!-- Top of the sub header -->
      <div class="row justify-between items-center">
        <div class="row items-baseline">
          <!-- book icon -->
          <span class="book-icon">
            <q-icon name="fa fa-book"></q-icon>
          </span>
          <!-- username/reponame -->
          <span class="q-mx-sm user-reponame text-subtitle1">
            <a :href="profileUrl">{{ username }}</a>
            <small class="q-mx-sm">/</small>
            <strong>
              <a :href="repoUrl">{{ repoName }}</a>
            </strong>
          </span>
          <!-- visibility -->
          <q-chip
            class="text-caption text-weight-medium q-pa-sm visibility text-capitalize"
            outline
          >
            {{ visibilityTag }}
          </q-chip>
        </div>
        <div class="row items-center">
          <button class="git-btn btn-sm text-capitalize">
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="far fa-eye"></q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mx-xs">watch</span>
              </template>
              <template v-if="watch > 0" v-slot:count>
                <q-badge
                  rounded
                  :label="watchCount"
                  style="background: #1b1f2414; color: inherit"
                />
              </template>
            </TextWithIconAndCount>
          </button>
          <button class="git-btn btn-sm text-capitalize">
            <TextWithIconAndCount>
              <template v-slot:icon>
                <ForkIcon />
              </template>
              <template v-slot:title>
                <span class="q-mx-xs">fork</span>
              </template>
              <template v-if="forks > 0" v-slot:count>
                <q-badge
                  rounded
                  :label="forksCount"
                  style="background: #1b1f2414; color: inherit"
                />
              </template>
            </TextWithIconAndCount>
          </button>
          <button class="git-btn btn-sm text-capitalize">
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="far fa-star"></q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mx-xs">Star</span>
              </template>
              <template v-if="stars > 0" v-slot:count>
                <q-badge
                  rounded
                  :label="starCount"
                  style="background: #1b1f2414; color: inherit"
                />
              </template>
            </TextWithIconAndCount>
          </button>
        </div>
      </div>
      <!-- bottom of the sub header -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'RepoSubHeader',
});
</script>

<script lang="ts" setup>
import { TextWithIconAndCount, ForkIcon } from '@/components';
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  repoName: {
    type: String,
    required: true,
  },
  visibilityTag: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  watch: {
    type: Number,
    required: true,
  },
  forks: {
    type: Number,
    required: true,
  },
});

const countsCalc = (count) => (count > 99 ? `99+` : count);

const repoUrl = computed(() => `/${props.username}/${props.repoName}`);
const profileUrl = computed(() => `/${props.username}`);
const starCount = computed(() => countsCalc(props.stars));
const watchCount = computed(() => countsCalc(props.watch));
const forksCount = computed(() => countsCalc(props.forks));
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
@import '@/styles/quasar.mediaquery.scss';
.subheader {
  background-color: $subheader;
}

.user-reponame {
  a:link {
    color: $primary;
  }
}

a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.visibility {
  color: $secondary-200;
  border-color: $secondary-100;
  font-size: 0.75rem;
}
</style>
