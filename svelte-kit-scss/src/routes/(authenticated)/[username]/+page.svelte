<script lang="ts">
  import type { PageServerData } from './$types';
  import { ProfileType } from '$lib/interfaces';
  import ProfileAboutSection from '$lib/components/Profile/ProfileAboutSection/ProfileAboutSection.svelte';
  import ProfileNavSection from '$lib/components/Profile/ProfileNavSection/ProfileNavSection.svelte';
  import OrgInfo from '$lib/components/Profile/OrgInfo/OrgInfo.svelte';
  import AllRepositoriesList from '$lib/components/RepositoryList/AllRepositoriesList/AllRepositoriesList.svelte';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';
  import LayoutSidebar from '$lib/components/shared/layouts/LayoutSidebar.svelte';
  import LayoutPageHeader from '$lib/components/shared/layouts/LayoutPageHeader.svelte';
  import UserProfile from '$lib/components/Profile/UserProfile/UserProfile.svelte';

  export let data: PageServerData;

  $: ({ profile, organizations, allRepositoriesListViewModel } = data);
  $: isOrg = profile?.type == ProfileType.Organization;
</script>

<div class="page-container">
  {#if isOrg}
    <LayoutPageHeader>
      <LayoutPageContentRow>
        <OrgInfo />
      </LayoutPageContentRow>
      <LayoutPageContentRow>
        <ProfileNavSection />
      </LayoutPageContentRow>
    </LayoutPageHeader>

    <LayoutPageContentRow>
      <LayoutSidebar>
        <div>
          <AllRepositoriesList model={allRepositoriesListViewModel} />
        </div>
        <div slot="sidebar-right">
          <ProfileAboutSection {profile} {organizations} />
        </div>
      </LayoutSidebar>
    </LayoutPageContentRow>
  {:else}
    <LayoutPageHeader>
      <LayoutPageContentRow>
        <LayoutSidebar placeholder="sidebar-left">
          <ProfileNavSection />
        </LayoutSidebar>
      </LayoutPageContentRow>
    </LayoutPageHeader>
    <LayoutPageContentRow>
      <LayoutSidebar>
        <UserProfile {profile} {organizations} slot="sidebar-left" />
        <AllRepositoriesList model={allRepositoriesListViewModel} />
      </LayoutSidebar>
    </LayoutPageContentRow>
  {/if}
</div>

<!-- todo: refactor this. use above snippet base-->

<!-- <div class="profile-container">
  <div class="profile-header">
    <div class="container">
      {#if isOrg}
        <OrgInfo />
        <nav class="col-span-12">
          <ProfileNavSection />
        </nav>
      {:else}
        <div class="col-span-3" />
        <nav class="col-span-9">
          <ProfileNavSection />
        </nav>
      {/if}
    </div>
  </div>

  <div class="container">
    {#if isOrg}
      <div class="col-span-12">
        <AllRepositoriesList model={allRepositoriesListViewModel} />
      </div>
    {:else}
      <div class="subpage col-span-3">
        {#if profile}
          <ProfileAboutSection {profile} {organizations} />
        {/if}
      </div>
      <div class="col-span-9">
        <AllRepositoriesList model={allRepositoriesListViewModel} />
      </div>
    {/if}
  </div>
</div> -->
<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .page-container {
  }
  // .profile-container {
  //   padding-top: 2rem;
  // }

  // .profile-header {
  //   position: sticky;
  //   top: 0;
  //   z-index: 5;
  //   background-color: white;
  //   border-bottom: 1px solid #fcba03;
  // }

  // .profile-body {
  //   grid-template-rows: max-content 1fr;
  //   padding-top: 2rem;

  //   .subpage {
  //     grid-row: 1 / 3;
  //   }
  // }

  // .container {
  //   max-width: variables.$xl;
  // }
</style>
