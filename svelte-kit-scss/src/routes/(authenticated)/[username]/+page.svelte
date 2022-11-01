<script lang="ts">
  import type { PageServerData } from './$types';
  import ProfileAboutSection from '$lib/components/ProfileAboutSection/ProfileAboutSection.svelte';
  import RepoList from '$lib/components/RepoList/RepoList.svelte';
  import type { UserReposState } from '$lib/interfaces';

  export let data: PageServerData;
  const { userInfo, userOrgs } = data;
  const { type } = userInfo;
</script>

<div class="grid grid-cols-12 profile-body container">
  Hello
  <div class="subpage col-span-3">
    {#if data?.userInfo}
      <ProfileAboutSection userInfo={data.userInfo} userOrgs={data.userOrgs} />
    {/if}
  </div>
  <div class="col-span-9">
    {#if data?.userRepos}
      <RepoList repos={data?.userRepos} />
    {/if}
  </div>

  <div class="grid grid-cols-12 profile-body container">
    
    {#if type == ProfileType.User}
      <div class="subpage col-span-3">
        <ProfileAboutSection userInfo={userInfo} userOrgs={userOrgs} />
      </div>
    {/if}
    <!-- <app-repo-controls class="col-span-9"></app-repo-controls> -->
    <!-- <app-repo-list class="col-span-9" [repos]="repos$ | async"></app-repo-list> -->
  </div>
</main>

<style lang="scss">
  .profile-body {
    grid-template-rows: max-content 1fr;

    .subpage {
      grid-row: 1 / 3;
    }
  }
</style>
