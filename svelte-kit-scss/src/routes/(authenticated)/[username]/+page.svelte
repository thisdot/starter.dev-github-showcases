<script lang="ts">
  import type { PageServerData } from './$types';
  import { ProfileType } from '$lib/interfaces';
  import ProfileNavSection from '$lib/components/Profile/ProfileNavSection/ProfileNavSection.svelte';
  import AllRepositoriesList from '$lib/components/RepositoryList/AllRepositoriesList/AllRepositoriesList.svelte';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';
  import LayoutSidebar from '$lib/components/shared/layouts/LayoutSidebar.svelte';
  import LayoutPageHeader from '$lib/components/shared/layouts/LayoutPageHeader.svelte';
  import UserProfile from '$lib/components/Profile/UserProfile/UserProfile.svelte';
  import OrganizationProfile from '$lib/components/Profile/OrganizationProfile/OrganizationProfile.svelte';
  import OrganizationDetails from '$lib/components/Profile/OrganizationProfile/OrganizationDetails/OrganizationDetails.svelte';

  export let data: PageServerData;

  $: ({ profile, organizations, allRepositoriesListViewModel, organizationMembers } = data);
  $: isOrg = profile?.type == ProfileType.Organization;
  $: people = organizationMembers || [];
</script>

<div class="page-container">
  {#if isOrg}
    <LayoutPageHeader gray>
      <LayoutPageContentRow>
        <div class="org-profile">
          <OrganizationProfile {profile} />
        </div>
      </LayoutPageContentRow>
      <LayoutPageContentRow>
        <ProfileNavSection />
      </LayoutPageContentRow>
    </LayoutPageHeader>

    <LayoutPageContentRow>
      <LayoutSidebar>
        <AllRepositoriesList model={allRepositoriesListViewModel} />
        <div slot="sidebar-right">
          <OrganizationDetails {people} />
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

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .page-container {
    .org-profile {
      margin-top: 1.5rem;
    }
  }
</style>
