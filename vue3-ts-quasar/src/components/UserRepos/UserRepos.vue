<template>
    <div v-for="repo in repos" :key="repo.id">
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className="mb-2">
                <Link href={`/${owner}/${name}`}>
                    <a className={styles.headingLink}>{{repo.name}}</a>
                </Link>
                <PrivacyBadge
                    :isPrivate="repo.isPrivate"
                    className="relative bottom-0.5"
                />
                </h3>
                <div className={styles.description}>{{repo.description}}</div>
                <RepoMeta
                :language="repo.language"
                :languageColor="repo.languageColor"
                :forkCount="repo.forkCount"
                :stargazerCount="repo.stargazerCount"
                :updatedAt="repo.updatedAt"
                />
            </div>
            <div className={styles.aside}>
                <button className={styles.starBtn}>
                <StarIcon className={styles.starIcon} />
                Star
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'UserRepos',
});
</script>

<script lang="ts" setup>
// NEW WIP FROM OLD NEXTJS USERREPOS
// import type { Repo } from './types';
// import { StarIcon } from '@heroicons/react/outline';
// import PrivacyBadge from '@components/PrivacyBadge';
// import RepoMeta from '@components/RepoMeta';
// import styles from './UserRepos.module.css';

// export interface UserReposViewProps {
//   repos: Repo[];
//   owner: string;
// }

import { getUserRepos } from '@/composables';
const props = defineProps({
  username: String,
});

const { repos, loading } = getUserRepos(props.username, false);
console.log(`HERE BE REPOS ${repos}`);
// taken from USERPROFILECARD
// import { useUser } from '@/composables';
// import { useUserStore } from '@/store/userStore';
// import { Auth } from '@/views';

// const { getUserProfile } = useUser();
// const props = defineProps({
//   username: String,
// });
// const user = useUserStore();
// const { data: userData, loading: userLoading } = getUserProfile(props.username);
</script>

<style lang="scss" scoped>
@import '../../App.css';
</style>