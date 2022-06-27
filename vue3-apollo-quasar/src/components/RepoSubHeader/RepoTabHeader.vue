<template>
  <diiv class="row items-center q-mt-md">
    <q-tabs
      v-model="activeTab"
      style="color: #586069"
      indicator-color="orange"
      dense
      no-caps
      inline-label
    >
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
      <q-tab name="issues" class="repo-tab">
        <TextWithIconAndCount>
          <template v-slot:icon>
            <q-icon class="custome-icon">
              <IssuesIcon />
            </q-icon>
          </template>
          <template v-slot:title>
            <span class="q-mr-xs q-ml-sm text-caption">Issues</span>
          </template>
          <template v-if="issuesCount > 0" v-slot:count>
            <q-badge rounded :label="issues_count" class="count-badge" />
          </template>
        </TextWithIconAndCount>
      </q-tab>
      <q-tab name="pullrequests" class="repo-tab">
        <TextWithIconAndCount>
          <template v-slot:icon>
            <q-icon class="custome-icon">
              <PullRequestsIcon />
            </q-icon>
          </template>
          <template v-slot:title>
            <span class="q-mr-xs q-ml-sm text-caption">Pull Requests</span>
          </template>
          <template v-if="pullRequestsCount > 0" v-slot:count>
            <q-badge rounded :label="pull_requests_count" class="count-badge" />
          </template>
        </TextWithIconAndCount>
      </q-tab>
    </q-tabs>
  </diiv>
</template>

<script lang="ts">
import { computed, defineComponent, defineProps, ref, defineEmits } from 'vue';

export default defineComponent({
  name: 'RepoTabHeader',
});
</script>

<script lang="ts" setup>
import {
  TextWithIconAndCount,
  CodeIcon,
  IssuesIcon,
  PullRequestsIcon,
} from '@/components';
import { countsCalc } from '@/helpers';
const tab = ref('code');

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

const issues_count = computed(() => countsCalc(props.issuesCount));
const pull_requests_count = computed(() => countsCalc(props.pullRequestsCount));

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
  padding: 0 6px !important;
}
</style>
