<template>
  <div v-if="!loading">
    <TabHeader :tabConfig="tabConfig" @triggerTab="changeTab" />
    <div class="wrapper">
      <div class="row" style="--gap: 0">
        <div class="tab-contents col">
          <q-tab-panels v-model="tab">
            <q-tab-panel name="code">
              <slot name="code">
                <BranchMenu v-if="branches" :branches="branches" />
              </slot>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRepo } from '../../composables/github/useRepoPage';

export default defineComponent({
  name: 'RepoPageLayout',
});
</script>

<script lang="ts" setup>
import { TabHeader } from '@/components';
import BranchMenu from '../BranchMenu/BranchMenu.vue';

const { getRepoPage } = useRepo();

const { context, loading } = getRepoPage({
  name: 'starter.dev',
  owner: 'thisdot',
});

const tabConfig = [
  {
    name: 'code',
    icon: 'CodeIcon',
    title: 'Code',
  },
];

const branches = [{ name: context.branch, default: true }];

const tab = ref('code');

function changeTab(val) {
  tab.value = val;
}
</script>

<style lang="scss" scoped>
@import '../../App.css';
.tab-contents {
  flex-grow: 1;
}
</style>
