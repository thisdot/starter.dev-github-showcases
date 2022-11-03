<script lang="ts">
  import type { PageServerData } from './$types';
  import ProfileAboutSection from '$lib/components/ProfileAboutSection/ProfileAboutSection.svelte';
  import RepoList from '$lib/components/RepoList/RepoList.svelte';
  import RepoControls from '$lib/components/shared/RepoControls/RepoControls.svelte';
  export let data: PageServerData;
  import type { RepoFiltersState } from '$lib/components/shared/RepoControls/repo-filters-state';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';

  // sample:
  const handleFiltersChange = (event: CustomEvent<RepoFiltersState>): void => {
    console.log('[handleFiltersChange]', event.detail);
  }
  
  const typeFilters: FilterDropdownOption[] = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Forked',
      value: 'forked'
    },
    {
      label: 'Archived',
      value: 'archived'
    }
  ];

  const languageFilters: FilterDropdownOption[] = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Vue',
      value: 'vue'
    },
    {
      label: 'JavaScript',
      value: 'js'
    },
    {
      label: 'TypeScript',
      value: 'ts'
    }
  ];

  const sortFilters: FilterDropdownOption[] = [
    {
      label: 'Last Updated',
      value: 'updated'
    },
    {
      label: 'Name',
      value: 'name'
    },
    {
      label: 'Stars',
      value: 'stars'
    }
  ];

  const reposCount = 7;
  // sample end
</script>

<div class="grid grid-cols-12 profile-body container">
  <div class="subpage col-span-3">
    {#if data?.userInfo}
      <ProfileAboutSection userInfo={data.userInfo} userOrgs={data.userOrgs} />
    {/if}
  </div>
  <div class="col-span-9">
    <RepoControls
      {reposCount}
      {typeFilters}
      {languageFilters}
      {sortFilters}
      on:filtersChange={handleFiltersChange}/>
  </div>
  <div class="col-span-9">
    {#if data?.userRepos}
      <RepoList repos={data?.userRepos} />
    {/if}
  </div>
</div>

<style lang="scss">
  .profile-body {
    grid-template-rows: max-content 1fr;

    .subpage {
      grid-row: 1 / 3;
    }
  }
</style>
