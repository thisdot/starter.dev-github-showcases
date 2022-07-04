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
      <q-tab name="code" class="repo-tab" @click="updateTab('code')">
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
      <q-tab name="issues" class="repo-tab" @click="updateTab('issues')">
        <TextWithIconAndCount>
          <template v-slot:icon>
            <q-icon class="custome-icon">
              <IssuesIcon />
            </q-icon>
          </template>
          <template v-slot:title>
            <span class="q-mr-xs q-ml-sm text-caption">Issues</span>
          </template>
          <template v-if="issuesCount" v-slot:count>
            <q-badge rounded :label="issues_count" class="count-badge" />
          </template>
        </TextWithIconAndCount>
      </q-tab>
      <q-tab
        name="pullrequests"
        class="repo-tab"
        @click="updateTab('pullrequests')"
      >
        <TextWithIconAndCount>
          <template v-slot:icon>
            <q-icon class="custome-icon">
              <PullRequestsIcon />
            </q-icon>
          </template>
          <template v-slot:title>
            <span class="q-mr-xs q-ml-sm text-caption">Pull Requests</span>
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

const updateTab = (val: string) => {
  tab.value = val;
};

const issues_count = computed(() => countCalc(props.issuesCount));
const pull_requests_count = computed(() => countCalc(props.pullRequestsCount));

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
.custome-icon {
  color: $secondary-200;
}

.custome-icon {
  transform: translateY(0.2rem);
}
.repo-tab {
  gap: 0;
  height: unset;
  padding: 0 6px !important;
}

.tabs {
  color: $secondary;
}
</style>
