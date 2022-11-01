<script lang="ts">
  import type { PageServerData } from './$types';
  import { ProfileType } from '$lib/interfaces';
  import ProfileAboutSection from '$lib/components/Profile/ProfileAboutSection/ProfileAboutSection.svelte';
  import ProfileNavSection from '$lib/components/Profile/ProfileNavSection/ProfileNavSection.svelte';

  export let data: PageServerData;
  const { userInfo, userOrgs } = data;
  const { type } = userInfo;
</script>

<main>
  <div class="profile-header">
    <div class="grid grid-cols-12 container">
      <div class="col-span-3"></div>
      <ProfileNavSection class="col-span-9"></ProfileNavSection>
    </div>
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
