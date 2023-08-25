<template>
  <div class="row items-center q-mt-md">
    <q-tabs
      v-model="activeTab"
      indicator-color="orange"
      dense
      no-caps
      inline-label
      class="tabs"
    >
      <q-tab
        name="code"
        class="repo-tab repo-tab_code"
        @click="updateTab(TABS.CODE)"
      >
        <TextWithIconAndCount>
          <template v-slot:icon>
            <q-icon
              class="custom-icon text-h6"
              name="svguse:/app-icons/code.svg#code"
            ></q-icon>
          </template>
          <template v-slot:title>
            <span
              class="q-mr-xs q-ml-sm text-caption"
              :class="{ 'text-weight-bold active': isTab(TABS.CODE) }"
              >Code</span
            >
          </template>
        </TextWithIconAndCount>
      </q-tab>
      <q-tab
        name="issues"
        class="repo-tab repo-tab_issues"
        @click="updateTab(TABS.ISSUES)"
      >
        <TextWithIconAndCount>
          <template v-slot:icon>
            <q-icon
              class="custom-icon text-h6"
              name="svguse:/app-icons/issue.svg#issue"
            ></q-icon>
          </template>
          <template v-slot:title>
            <span
              class="q-mr-xs q-ml-sm text-caption"
              :class="{ 'text-weight-bold active': isTab(TABS.ISSUES) }"
              >Issues</span
            >
          </template>
          <template v-if="issuesCount" v-slot:count>
            <q-badge rounded :label="issues_count" class="count-badge" />
          </template>
        </TextWithIconAndCount>
      </q-tab>
      <q-tab
        name="pullrequests"
        class="repo-tab repo-tab_pull-requests"
        @click="updateTab(TABS.PULL_REQUESTS)"
      >
        <TextWithIconAndCount>
          <template v-slot:icon>
            <q-icon
              class="custom-icon text-h6"
              name="svguse:/app-icons/pull-request.svg#pull-request"
            ></q-icon>
          </template>
          <template v-slot:title>
            <span
              class="q-mr-xs q-ml-sm text-caption"
              :class="{ 'text-weight-bold active': isTab(TABS.PULL_REQUESTS) }"
              >Pull Requests</span
            >
          </template>
          <template v-if="pullRequestsCount" v-slot:count>
            <q-badge rounded :label="pull_requests_count" class="count-badge" />
          </template>
        </TextWithIconAndCount>
      </q-tab>
    </q-tabs>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineProps, ref, defineEmits } from 'vue';
import { countCalc } from '@/helpers';
import { TABS } from './data';

export default defineComponent({
  name: 'RepoTabHeader',
});
</script>

<script lang="ts" setup>
import { TextWithIconAndCount } from '@/components';
import { useRepoStore } from '@/store/respoStore';

const tab = ref(TABS.CODE);
const repoStore = useRepoStore();

const props = defineProps({
  issuesCount: {
    type: Number,
    required: true,
  },
  pullRequestsCount: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['triggerTab']);

const updateTab = (val: string) => {
  repoStore.resetFilter();
  tab.value = val;
};

const issues_count = computed(() => countCalc(props.issuesCount));
const pull_requests_count = computed(() => countCalc(props.pullRequestsCount));
const isTab = (value) => value === tab.value;

const activeTab = computed({
  get() {
    emit('triggerTab', tab.value);
    return tab.value;
  },
  set(val: string) {
    updateTab(val);
    emit('triggerTab', tab.value);
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.count-badge {
  background: $dark-300;
  color: inherit;
}

.fa,
.custom-icon {
  color: $secondary-200;
}

.custom-icon {
  transform: translateY(0.2rem);
}
.repo-tab {
  gap: 0;
  height: unset;
  padding: 0 6px !important;

  .active {
    color: $dark;
  }
}

.tabs {
  color: $secondary;
}
</style>
