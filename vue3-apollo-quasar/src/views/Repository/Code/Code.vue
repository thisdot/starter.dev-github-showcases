<template>
  <section class="q-mx-auto q-my-xl code-section">
    <BranchMenu :branches="repoBranches" />
    <Loader v-if="loading" />
    <q-card flat bordered class="q-mt-md" v-else>
      <FileExplorer
        v-if="!fileTree.isBlob && fileTree.data.length > 0"
        :content-list="fileTree.data"
      />
      <FileView
        v-else-if="fileTree.isBlob"
        :path="dirPath"
        :text="fileTree.text"
        :fileSize="fileTree.size"
      />
      <div
        v-else-if="imagePath"
        class="q-py-md row justify-center items-center"
      >
        <a
          :href="'https://raw.githubusercontent.com' + imagePath"
          target="_blank"
          class="view-raw text-weight-medium"
        >
          View Raw
        </a>
      </div>
      <span v-else>No content</span>
    </q-card>
    <div v-if="!loading && readme !== null && !fileTree.isBlob">
      <MarkdownContainer
        :owner="owner"
        :repo="repo"
        :readme-path="readme"
        :branch="branch"
      />
    </div>
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
import {
  FileExplorer,
  BranchMenu,
  FileView,
  MarkdownContainer,
} from '@/components';
import { useRepoTree, useRepoBranch } from '@/composables';
import Loader from './Loader.vue';

const props = defineProps({
  owner: {
    type: String,
    default: '',
  },
  repo: {
    type: String,
    default: '',
  },
  dirPath: {
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
const { data: tree, loading } = getRepoTree({
  owner: props.owner,
  name: props.repo,
  branch: props.branch,
  path: props.dirPath ? props.dirPath : props.repoDirPath,
});

type FileTree = {
  text?: string;
  size?: number;
  data?: ExplorerContent[];
  isBlob: boolean;
};

const imagePath = computed(() => {
  const imageExtensions = ['ico', 'png', 'jpg', 'jpeg'];
  const extensionArray = props.dirPath.split('.');
  const extension = extensionArray[extensionArray.length - 1];
  if (imageExtensions.indexOf(extension) >= 0) {
    return `/${props.owner}/${props.repo}/${props.branch}/${props.dirPath}`;
  }
  return null;
});

const fileTree = computed((): FileTree => {
  if (!Array.isArray(tree?.value)) {
    return { text: tree?.value.text, size: tree?.value.byteSize, isBlob: true };
  }
  const result = tree?.value.map(
    (treeBranch): ExplorerContent => ({
      isDirectory: treeBranch.type === 'tree',
      name: treeBranch.name,
      latestCommitMessage: 'Test commit', //TODO: Get this
      lastUpdated: 'Jul 15 2022', //TODO: Get this
      to: `${
        !props.dirPath ? `${props.repo}/` : `/${props.owner}/${props.repo}/`
      }${treeBranch.path}`,
    }),
  );
  return {
    isBlob: false,
    data: result,
  };
});

const { getRepoBranches } = useRepoBranch();
const { data: branches } = getRepoBranches({
  owner: props.owner,
  name: props.repo,
});
const repoBranches = computed(() => branches?.value.slice());

const readme = computed(() => {
  const res = fileTree.value.data?.find(
    (res) => !res.isDirectory && res.name === 'README.md',
  );
  if (res) {
    return props.dirPath ? `${props.dirPath}/${res.name}` : '';
  }
  return null;
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.code-section {
  max-width: 70rem;
}
.file-text {
  white-space: pre-wrap;
}
.view-raw {
  text-decoration: none;
  color: $primary;
}
</style>
