<template>
  <section class="q-mx-auto q-my-xl code-section">
    <BranchMenu :branches="repoBranches" />
    <q-card flat bordered class="q-mt-md">
      <FileExplorer v-if="!fileTree.isBlob" :content-list="fileTree.data" />
      <pre class="file-text" v-else>{{ fileTree.text }}</pre>
    </q-card>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, defineProps } from 'vue';
import { ExplorerContent } from '@/components/FileExplorer/types';

export default defineComponent({
  name: 'Code',
});
</script>

<script lang="ts" setup>
import { FileExplorer, BranchMenu } from '@/components';
import { useRepoTree, useRepoBranches } from '@/composables';

const props = defineProps({
  owner: {
    type: String,
    default: '',
  },
  repo: {
    type: String,
    default: '',
  },
  dirpath: {
    type: String,
    default: '',
  },
  branch: {
    type: String,
    default: '',
  },
  repoDirPath: {
    type: String,
    default: '',
  },
});

const { getRepoTree } = useRepoTree();
const { data: tree } = getRepoTree({
  owner: props.owner,
  name: props.repo,
  branch: props.branch,
  path: props.dirpath ? props.dirpath : props.repoDirPath,
});

type FileTree = {
  text?: string | number | unknown;
  data?: ExplorerContent[];
  isBlob: boolean;
};

const fileTree = computed((): FileTree => {
  if (!Array.isArray(tree?.value)) {
    return { text: tree?.value, isBlob: true };
  }
  const result = tree.value.map(
    (treeBranch): ExplorerContent => ({
      isDirectory: treeBranch.type === 'tree',
      name: treeBranch.name,
      latestCommitMessage: 'Test commit', //TODO: Get this
      lastUpdated: 'Jul 15 2022', //TODO: Get this
      to: `${
        !props.dirpath ? `${props.repo}/` : `/${props.owner}/${props.repo}/`
      }${treeBranch.path}`,
    }),
  );
  return {
    isBlob: false,
    data: result,
  };
});

const { getRepoBranches } = useRepoBranches();
const { data: branches } = getRepoBranches({
  owner: props.owner,
  name: props.repo,
});
const repoBranches = computed(() => branches?.value.slice());
</script>

<style lang="scss" scoped>
.code-section {
  max-width: 70rem;
}
.file-text {
  white-space: pre-wrap;
}
</style>
