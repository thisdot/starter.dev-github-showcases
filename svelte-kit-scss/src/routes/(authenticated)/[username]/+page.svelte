<script lang="ts">
  import type { PageServerData } from './$types';
  import { ProfileType } from '$lib/interfaces';
  import AllRepositoriesList from '$lib/components/RepositoryList/AllRepositoriesList/AllRepositoriesList.svelte';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';
  import LayoutSidebar from '$lib/components/shared/layouts/LayoutSidebar.svelte';
  import LayoutPageHeader from '$lib/components/shared/layouts/LayoutPageHeader.svelte';
  import UserProfile from '$lib/components/Profile/UserProfile/UserProfile.svelte';
  import OrganizationProfile from '$lib/components/Profile/OrganizationProfile/OrganizationProfile.svelte';
  import OrganizationDetails from '$lib/components/Profile/OrganizationProfile/OrganizationDetails/OrganizationDetails.svelte';
  import PageNavigtionTabs from '$lib/components/shared/PageNavigationTabs/PageNavigtionTabs.svelte';

  export let data: PageServerData;

  $: ({ tabs, pageId, profile, organizations, allRepositoriesListViewModel, organizationMembers } =
    data);
  $: isOrg = profile?.type == ProfileType.Organization;
  $: people = organizationMembers || [];
</script>

<div class="page-container">
  {#if isOrg}
    <LayoutPageHeader gray>
      <LayoutPageContentRow>
        <div class="org-profile">
          {console.log(profile)}
          <OrganizationProfile {profile} />
        </div>
      </LayoutPageContentRow>
      <LayoutPageContentRow>
        <PageNavigtionTabs {tabs} currentPageId={pageId} />
      </LayoutPageContentRow>
    </LayoutPageHeader>

    <LayoutPageContentRow marginBottom>
      <LayoutSidebar>
        <AllRepositoriesList model={allRepositoriesListViewModel} />
        <div slot="sidebar-right">
          <OrganizationDetails {people} />
        </div>
      </LayoutSidebar>
    </LayoutPageContentRow>
  {:else}
    <LayoutPageHeader>
      <LayoutPageContentRow slot="sticky">
        <LayoutSidebar placeholder="sidebar-left">
          <PageNavigtionTabs {tabs} currentPageId={pageId} />
        </LayoutSidebar>
      </LayoutPageContentRow>
    </LayoutPageHeader>
    <LayoutPageContentRow marginBottom>
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
