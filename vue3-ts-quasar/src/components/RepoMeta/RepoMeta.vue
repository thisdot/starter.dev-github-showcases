<template>
  <div className="{styles.metadata}">
    <div v-if="language">
      <span style={{
              backgroundColor: languageColor || '#ccc',
      }}
      className={styles.languageColor} /> {language}
    </div>
    <div v-if="stargazerCount > 0 || forkCount > 0" className="space-x-4">
      <span v-if="stargazerCount > 0" className="{styles.socialCount}">
        <StarIcon className="{styles.socialIcon}" /> {stargazerCount}
      </span>
      <span v-if="forkCount > 0" className="{styles.socialCount}">
        <GitBranchIcon className="{styles.socialIcon}" /> {forkCount}
      </span>
    </div>
    <div>
      Updated{' '}
      {{ formatDistance(new Date(updatedAt), Date.now(), { addSuffix: true }) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'RepoMeta',
});
</script>

<script lang="ts" setup>
import { formatDistance } from 'date-fns';
// import { StarIcon } from '@heroicons/react/outline';
// import * as styles from './RepoMeta.classNames';
// import { GitBranchIcon } from '../Icons';

// function RepoMeta({
//   language,
//   languageColor,
//   stargazerCount,
//   forkCount,
//   updatedAt,
// }: RepoMetaProps);
</script>
