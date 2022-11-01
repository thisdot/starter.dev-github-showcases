<script lang="ts">
  import type { PageServerData } from './$types';
  import { ProfileType } from '$lib/interfaces';
  import ProfileAboutSection from '$lib/components/Profile/ProfileAboutSection/ProfileAboutSection.svelte';
  import ProfileNavSection from '$lib/components/Profile/ProfileNavSection/ProfileNavSection.svelte';
  import OrgInfo from '$lib/components/Profile/OrgInfo/OrgInfo.svelte';

  export let data: PageServerData;
  const { userInfo, userOrgs } = data;
  const isOrg = userInfo?.type == ProfileType.Organization;
</script>

<div class="profile-container">
  <div class="profile-header">
    <div class="grid grid-cols-12 container">
      {#if isOrg}
        <OrgInfo />
        <nav class="col-span-12">
          <ProfileNavSection />
        </nav>
      {:else}
        <div class="col-span-3"></div>
        <nav class="col-span-9">
          <ProfileNavSection />
        </nav>
      {/if}
    </div>
  </div>
  
  <div class="grid grid-cols-12 profile-body container">
    {#if isOrg}
      <!-- TODO controls -->
      <!-- TODO repo list -->
    {:else}
      <div class="subpage col-span-3">
        <ProfileAboutSection userInfo={userInfo} userOrgs={userOrgs} />
      </div>
      <!-- TODO controls -->
      <!-- TODO repo list -->
    {/if}
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .profile-container {
    padding-top: 2rem;
  }
  .profile-header {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: white;
    border-bottom: 1px solid rgb(229, 231, 235, 1);
  }
  .profile-body {
    grid-template-rows: max-content 1fr;

    .subpage {
      grid-row: 1 / 3;
    }
  }
  
  .container {
    max-width: variables.$xl;
  }
</style>
