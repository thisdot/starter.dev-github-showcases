<template>
  <div class="subheader q-pt-sm">
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
          <q-chip class="text-caption text-weight-medium q-pa-sm visibility text-capitalize" outline>
            {{ visibilityTag }}
          </q-chip>
        </div>
        <div class="row items-center">
          <button class="git-btn text-capitalize row justify-between items-center relative-position">
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="far fa-eye"></q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mr-xs q-ml-sm text-caption">watch</span>
              </template>
              <template v-if="watch > 0" v-slot:count>
                <q-badge rounded :label="watchCount" class="count-badge" />
              </template>
            </TextWithIconAndCount>
            <span class="q-ml-xm">
              <q-icon class="fa fa-caret-down"></q-icon>
              <q-menu style="min-width: 10.5rem">
                <q-list>
                  <q-item>Happy Teddy show</q-item>
                  <q-item>Teddy</q-item>
                  <q-item>Happy</q-item>
                </q-list>
              </q-menu>
            </span>
          </button>
          <button class="git-btn text-capitalize row justify-between items-center">
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="custome-icon text-subtitle1">
                  <ForkIcon />
                </q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mr-xs q-ml-sm text-caption">fork</span>
              </template>
              <template v-if="forks > 0" v-slot:count>
                <q-badge rounded :label="forksCount" class="count-badge" />
              </template>
            </TextWithIconAndCount>
          </button>
          <button class="git-btn text-capitalize row justify-between items-center relative-position">
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="far fa-star"></q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mr-xs q-ml-sm text-caption">Star</span>
              </template>
              <template v-if="stars > 0" v-slot:count>
                <q-badge rounded :label="starCount" class="count-badge" />
              </template>
            </TextWithIconAndCount>

            <span class="star_dropdown q-ml-md">
              <q-icon class="fa fa-caret-down"></q-icon>
              <q-menu style="min-width: 10.5rem">
                <q-list>
                  <q-item>Happy Teddy show</q-item>
                  <q-item>Teddy</q-item>
                  <q-item>Happy</q-item>
                </q-list>
              </q-menu>
            </span>
          </button>
        </div>
      </div>
      <!-- bottom of the sub header -->

      <diiv class="row items-center q-mt-xl">
        <q-tabs v-model="activeTab" style="color: #586069" indicator-color="orange" dense no-caps inline-label>
          <q-tab name="code" class="repo-tab">
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="custome-icon">
                  <CodeIcon />
                </q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mr-xs q-ml-sm text-caption">Code</span>
              </template>
            </TextWithIconAndCount>
          </q-tab>
          <q-tab name="issues" class="repo-tab"> Issues </q-tab>
          <q-tab name="pullrequest" class="repo-tab"> Pull Requests </q-tab>
        </q-tabs>
      </diiv>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineProps, ref, defineEmits } from 'vue';

export default defineComponent({
  name: 'RepoSubHeader',
});
</script>

<script lang="ts" setup>
import { TextWithIconAndCount, ForkIcon, CodeIcon } from '@/components';
const tab = ref('code');

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

const emit = defineEmits(['triggerTab']);

const countsCalc = (count) => (count > 99 ? `99+` : count);

const repoUrl = computed(() => `/${props.username}/${props.repoName}`);
const profileUrl = computed(() => `/${props.username}`);
const starCount = computed(() => countsCalc(props.stars));
const watchCount = computed(() => countsCalc(props.watch));
const forksCount = computed(() => countsCalc(props.forks));

const activeTab = computed({
  get() {
    emit('triggerTab', tab.value);
    return tab.value;
  },
  set(val: string) {
    tab.value = val;
    emit('triggerTab', tab.value);
  },
});
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

.star_dropdown::before {
  width: 1px;
  top: 0;
  bottom: 0;
  content: '';
  position: absolute;
  right: 1.5rem;
  background-color: $secondary-100;
}

.star_dropdown {
  color: $secondary-200;
}
.count-badge {
  background: #1b1f2414;
  color: inherit;
}

.fa,
.custome-icon {
  color: $secondary-200;
}

.custome-icon {
  transform: translateY(0.2rem);
}
.repo-tab {
  gap: 0;
  height: 40px;
}
</style>
