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
  import { debounce, filterRepoUtil } from '$lib/helpers';
  import { LanguageFilters, SortFilters, TypeFilters } from '$lib/enums';
  export let data: PageServerData;

  const { userInfo, userOrgs, userRepos, repoLanguageList } = data;

  const DEBOUNCE_TIME = 2000;

  let hasActiveFilters = false;

  let filteredRepos = userRepos;

  const filterRepos = (event: CustomEvent<RepoFiltersState>): void => {
    const { searchInput, type, language } = event.detail;
    if (hasActiveFilters) {
      filteredRepos = userRepos.filter(filterRepoUtil(searchInput, type, language));
    } else {
      filteredRepos = userRepos;
    }
  };

  const debouncedFilterRepos = debounce<(event: CustomEvent<RepoFiltersState>) => void>(
    filterRepos,
    DEBOUNCE_TIME
  );

  let lastSearchTerm = '';

  const handleFiltersChange = (event: CustomEvent<RepoFiltersState>): void => {
    const { searchInput, type, language, sort } = event.detail || {};

    hasActiveFilters =
      type.value !== TypeFilters.ALL ||
      language.value !== LanguageFilters.ALL ||
      sort.value !== SortFilters.UPDATED ||
      !!searchInput;

    if (event.detail.searchInput === lastSearchTerm) {
      filterRepos(event);
    } else {
      debouncedFilterRepos(event);
    }
    lastSearchTerm = event?.detail?.searchInput ?? '';
  };

  const typeFilters: FilterDropdownOption<TypeFilters>[] = [
    {
      label: 'All',
      value: TypeFilters.ALL,
    },
    {
      label: 'Forked',
      value: TypeFilters.FORKED,
    },
    {
      label: 'Archived',
      value: TypeFilters.ARCHIVED,
    },
  ];

  const languageFilters: FilterDropdownOption<LanguageFilters>[] = [
    {
      label: 'All',
      value: LanguageFilters.ALL,
    },
  ].concat(repoLanguageList);

  const sortFilters: FilterDropdownOption<SortFilters>[] = [
    {
      label: 'Last Updated',
      value: SortFilters.UPDATED,
    },
    {
      label: 'Name',
      value: SortFilters.NAME,
    },
    {
      label: 'Stars',
      value: SortFilters.STARS,
    },
  ];

  $: reposCount = filteredRepos.length;

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
        <RepoList repos={filteredRepos} />
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
        <RepoList repos={filteredRepos} />
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
