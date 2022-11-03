<script lang="ts">
  import type { PageServerData } from './$types';
  import { ProfileType } from '$lib/interfaces';
  import ProfileAboutSection from '$lib/components/Profile/ProfileAboutSection/ProfileAboutSection.svelte';
  import ProfileNavSection from '$lib/components/Profile/ProfileNavSection/ProfileNavSection.svelte';
  import RepoList from '$lib/components/RepoList/RepoList.svelte';
  import RepoControls from '$lib/components/shared/RepoControls/RepoControls.svelte';
  import OrgInfo from '$lib/components/Profile/OrgInfo/OrgInfo.svelte';
  import type { RepoFiltersState } from '$lib/components/shared/RepoControls/repo-filters-state';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';
  
  export let data: PageServerData;

  // sample:
  const handleFiltersChange = (event: CustomEvent<RepoFiltersState>): void => {
    console.log('[handleFiltersChange]', event.detail);
  };

  const typeFilters: FilterDropdownOption[] = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'Forked',
      value: 'forked',
    },
    {
      label: 'Archived',
      value: 'archived',
    },
  ];

  const languageFilters: FilterDropdownOption[] = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'Vue',
      value: 'vue',
    },
    {
      label: 'JavaScript',
      value: 'js',
    },
    {
      label: 'TypeScript',
      value: 'ts',
    },
  ];

  const sortFilters: FilterDropdownOption[] = [
    {
      label: 'Last Updated',
      value: 'updated',
    },
    {
      label: 'Name',
      value: 'name',
    },
    {
      label: 'Stars',
      value: 'stars',
    },
  ];

  const reposCount = 7;
  // sample end

  const { userInfo, userOrgs, userRepos } = data;
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
        <div class="col-span-3" />
        <nav class="col-span-9">
          <ProfileNavSection />
        </nav>
      {/if}
    </div>
  </div>

  <div class="grid grid-cols-12 profile-body container">
    {#if isOrg}
      <div class="col-span-12">
        <RepoControls
          {reposCount}
          {typeFilters}
          {languageFilters}
          {sortFilters}
          on:filtersChange={handleFiltersChange}
        />
        <RepoList repos={userRepos} />
      </div>
    {:else}
      <div class="subpage col-span-3">
        {#if userInfo}
          <ProfileAboutSection {userInfo} {userOrgs} />
        {/if}
      </div>
      <div class="col-span-9">
        <RepoControls
          {reposCount}
          {typeFilters}
          {languageFilters}
          {sortFilters}
          on:filtersChange={handleFiltersChange}
        />
        <RepoList repos={userRepos} />
      </div>
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
    border-bottom: 1px solid #fcba03;
  }
  .profile-body {
    grid-template-rows: max-content 1fr;
    padding-top: 2rem;

    .subpage {
      grid-row: 1 / 3;
    }
  }

  .container {
    max-width: variables.$xl;
  }
</style>
